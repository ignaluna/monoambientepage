export default function ElConcepto() {
  return (
    <div
      className='h-full w-full lg:flex flex-col items-center justify-center items-bg-gradient-to-b from-green-500 to-emerald-700 text-white lg:p-12'
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dvh8hozns/image/upload/v1735864956/Monoambiente/thhxetx5lnpv66l1dqga.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='max-w-4xl w-full'>
        <h2 className='relative text-4xl font-bold lg:mb-8 text-center text-shadow'>
          El Concepto
        </h2>
        <div className='relative flex'>
          <div className='backdrop-blur-sm border-none text-white pb-5 lg:text-lg'>
            <p className='mb-4'>
              Monoambiente no es una banda tradicional; es un concepto artístico
              que trasciende lo musical. Representamos ese momento único en el
              que conectás profundamente con el arte y te desconectás del
              sistema. Es ahí donde accedés a tu propio mundo, tu "mono", ese
              espacio interno donde reside tu esencia más pura. Creemos que
              dentro de cada uno de nosotros habita un caudal de información y
              poder que apenas utilizamos. Nuestro proyecto está impregnado de
              esa búsqueda: queremos crear una comunidad musical que inspire a
              las personas a encontrar su propio "mono", desconectarse para
              conectar de verdad.
            </p>
            <p className='mb-4'>
              Aunque nacimos en Córdoba Capital, la mayoría de nuestros
              integrantes son de San Luis y Merlo, y hoy vivimos en Punta del
              Este, Uruguay. Monoambiente no es solo música; es también una
              forma de vida. Los músicos que formamos parte del proyecto
              compartimos una economía común y buscamos valorar las cosas por su
              aporte colectivo, no únicamente por su precio económico.
            </p>

            <p>
              Musicalmente, nos nutrimos de influencias tan diversas como Las
              Pastillas del Abuelo, El Kuelgue, Babasónicos, Soda Stereo y Tan
              Biónica. En nuestros shows en vivo, versionamos canciones
              populares para crear momentos únicos y conectar profundamente con
              el público. No nos limitamos a un estilo: a través de nuestra
              identidad, pueden sonar un tango, un cuarteto o un blues. Nos
              encanta explorar y reinventar la música para sorprender e
              inspirar. Cada miembro de Monoambiente cuenta con una formación
              profesional en su instrumento. Esa base técnica se combina con
              nuestra visión artística y comunitaria para crear una obra
              honesta, profundamente ligada a quienes somos y al mundo que
              queremos construir. Monoambiente es música, comunidad y una
              invitación a explorar lo que llevamos dentro.
            </p>
          </div>
        </div>
      </div>
      {/* <iframe
        className='relative'
        src='https://www.youtube.com/embed/pD5_HoIVwKQ?si=ZtNL9K9_az6ZQ43m'
        title='Coca Y Fernet - Monoambiente'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe> */}
    </div>
  );
}
