import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCalendarEvents } from '@/app/actions/calendar';
import { CalendarDays } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

function EventSkeleton() {
  return (
    <Card className='bg-white/10 backdrop-blur-lg border-none text-white animate-pulse'>
      <CardHeader>
        <div className='h-6 bg-white/20 rounded w-3/4'></div>
      </CardHeader>
      <CardContent>
        <div className='h-4 bg-white/20 rounded w-1/2 mb-2'></div>
        <div className='h-4 bg-white/20 rounded w-3/4'></div>
      </CardContent>
    </Card>
  );
}

async function EventosCalendario() {
  const eventos = await getCalendarEvents();

  if (!eventos.length) {
    return (
      <div className='text-center text-white'>
        <CalendarDays className='mx-auto h-12 w-12 mb-4' />
        <p>No hay eventos programados próximamente</p>
      </div>
    );
  }

  return (
    <Swiper
      direction={'horizontal'}
      slidesPerView={3}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        clickable: true,
        type: 'fraction',
      }}
      modules={[Mousewheel, Pagination]}
      className='h-full w-full '
      breakpoints={{
        // Configuración para pantallas pequeñas
        320: {
          slidesPerView: 1, // 1 slide visible en pantallas muy pequeñas
        },
        // Configuración para pantallas medianas
        640: {
          slidesPerView: 2, // 2 slides visibles en pantallas medianas
        },
        // Configuración para pantallas grandes
        1024: {
          slidesPerView: 3, // 3 slides visibles en pantallas grandes
        },
      }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {eventos.map((evento) => (
          <SwiperSlide>
            <Card
              key={evento.id}
              className='bg-white/10 backdrop-blur-lg border-none text-white pb-5'
            >
              <CardHeader>
                <CardTitle>
                  <p className='text-lg font-semibold'>{evento.titulo}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {new Date(evento.fecha).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                {evento.lugar && (
                  <p className='text-sm mt-2 flex items-center gap-1'>
                    <span>📍</span> {evento.lugar}
                  </p>
                )}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

export default function ProximasFechas() {
  return (
    <div
      className='h-full w-full flex items-center justify-center p-4 relative'
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAD_4212.jpg-MFpINXt0tV9V9yzTlCKQmC9zGoJh8Z.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='max-w-4xl w-full relative z-10'>
        <h2 className='text-4xl font-bold mb-8 text-center text-white'>
          Próximas Fechas
        </h2>
        <Suspense
          fallback={
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {[...Array(3)].map((_, i) => (
                <EventSkeleton key={i} />
              ))}
            </div>
          }
        >
          <EventosCalendario />
        </Suspense>
      </div>
    </div>
  );
}
