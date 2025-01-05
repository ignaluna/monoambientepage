export default function EscuchaMusica() {
  return (
    <div
      className='h-full w-full flex items-center justify-center p-4 relative'
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAD_4161.jpg-P1xnrU4vuXV3K8qh0uKPLcmh8ydgza.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-black/40' />
      <div className='max-w-4xl w-full relative z-10'>
        <h2 className='text-4xl font-bold mb-8 text-center'>
          Escucha Nuestra Música
        </h2>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            src='https://open.spotify.com/embed/artist/4e6Rvx1eU62g5DAgbf8XTU'
            width='100%'
            height='380'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
