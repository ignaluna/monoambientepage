import { Instagram, Facebook, Youtube, Music, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const redes = [
  {
    nombre: 'Instagram',
    icono: Instagram,
    url: 'https://instagram.com/monoambiente.ok',
  },
  {
    nombre: 'YouTube',
    icono: Youtube,
    url: 'https://youtube.com/UCR_l-eOmM-nguRzzrIPSq_g',
  },
  {
    nombre: 'TikTok',
    icono: Music,
    url: 'https://tiktok.com/@monoambiente.ok',
  },
  {
    nombre: 'WhatsApp',
    icono: Phone,
    url: 'https://facebook.com/monoambiente.ok',
  },
];

export default function RedesSociales() {
  return (
    <div
      className='h-full w-full flex items-center justify-center  text-white p-4'
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dvh8hozns/image/upload/v1735858153/Monoambiente/wm0igbdpheese590jv4u.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-4xl w-full'>
        <h2 className='text-4xl font-bold mb-8 text-center text-shadow'>
          Sigamos en contacto
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {redes.map((red, index) => (
            <Button
              key={index}
              variant='outline'
              size='lg'
              className='flex flex-col items-center justify-center h-36 bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300'
              asChild
            >
              <a href={red.url} target='_blank' rel='noopener noreferrer'>
                <red.icono
                  style={{ width: '50px', height: '50px' }}
                  className='mb-4'
                />
                <span>{red.nombre}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
