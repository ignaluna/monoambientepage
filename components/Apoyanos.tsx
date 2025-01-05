'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ContributionDrawer } from './ContributionDrawer';
import { toast } from '@/hooks/use-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const projects = [
  {
    id: 'album-2024',
    title: 'Pequeño Primate',
    description:
      '"Pequeño Primate" es un viaje introspectivo a mis primeros pasos en la música (Igna), con 8 canciones cargadas de influencias de Las Pastillas del Abuelo, el Kuelgue, Babásonicos y Soda estero. Con un sonido juvenil y auténtico, el disco busca compartir quién somos y explorar nuestros valores y vínculos más importantes.',
    goal: 3200,
    current: 1600,
    currency: 'USD',
    image:
      'https://res.cloudinary.com/dvh8hozns/image/upload/v1736037326/Monoambiente/laivu8nnsfq1vrh4l6l5.webp',
  },
  {
    id: 'gira-2024',
    title: 'Monoambientech',
    description:
      'Monoambientech es nuestro proyecto para llevar nuestra música a otro nivel, combinando nuestro sonido característico con influencias electrónicas y un repertorio de pistas bailables.',
    goal: 1000000,
    current: 300000,
    currency: 'ARS',
    image:
      'https://res.cloudinary.com/dvh8hozns/image/upload/v1736037407/Monoambiente/brkvqkvu1ig2tzlgrxxh.webp',
  },
  {
    id: 'el-lado-oscuro-del-mono',
    title: 'El lado oscuro del Mono',
    description:
      'El Lado Oscuro del Mono es nuestro próximo disco, donde exploramos una visión más madura como grupo. Inspirado en momentos difíciles de mi vida y en el desarrollo del concepto de Monoambiente, basado en la teoría de la realidad como simulación, este trabajo profundiza en ideas oscuras. Con sonidos más estridentes y producciones centradas en transmitir emociones intensas, buscamos llevar el arte al límite de lo visceral y lo reflexivo.',
    goal: 1000000,
    current: 300000,
    currency: 'ARS',
    image:
      'https://res.cloudinary.com/dvh8hozns/image/upload/v1736037018/Monoambiente/kizgekemkjtbm9rn8ns9.webp',
  },
];

export default function Apoyanos() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleContributionSuccess = () => {
    toast({
      title: '¡Gracias por tu apoyo!',
      description:
        'Nos pondremos en contacto contigo pronto para validar tu aporte.',
    });
    setSelectedProject(null);
  };

  return (
    <div
      className='h-full w-full flex items-center justify-center p-4 relative'
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAD_4275.jpg-K6WZOWwMwJQe3r0br3xx3HUF2YdGIl.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-black/60' />
      <div className='max-w-4xl w-full relative z-10'>
        <h2 className='text-4xl font-bold mb-8 text-center text-white'>
          Apóyanos
        </h2>
        <Swiper
          direction={'horizontal'}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          className='h-full w-full '
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project) => (
              <SwiperSlide>
                <Card
                  key={project.id}
                  className='bg-white/10 backdrop-blur-lg border-none text-white'
                >
                  <CardHeader className='flex justify-center items-center'>
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className='text-gray-200'>
                        {project.description}
                      </CardDescription>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className=' h-48 object-cover mb-4 rounded'
                    />
                  </CardHeader>
                  <CardContent className='flex flex-col justify-center items-center'>
                    <div className='space-y-4'>
                      {/* <div className='flex justify-between text-sm'>
                        <span>
                          {project.current.toLocaleString('es-AR')}{' '}
                          {project.currency}
                        </span>
                        <span>
                          {project.goal.toLocaleString('es-AR')}{' '}
                          {project.currency}
                        </span>
                      </div> */}
                      <Button
                        className='w-full'
                        onClick={() => setSelectedProject(project.id)}
                      >
                        Apoyar este proyecto
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <ContributionDrawer
        project={projects.find((p) => p.id === selectedProject)}
        onClose={() => setSelectedProject(null)}
        onSuccess={handleContributionSuccess}
      />
    </div>
  );
}
