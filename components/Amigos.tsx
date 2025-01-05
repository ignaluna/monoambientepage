import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const amigos = [
  { nombre: 'Los Rockers', descripcion: 'Banda de rock alternativo' },
  { nombre: 'Tropical Beats', descripcion: 'Fusión de ritmos tropicales' },
  { nombre: 'Electro Funk', descripcion: 'Mezcla de electrónica y funk' },
  { nombre: 'Acoustic Dreams', descripcion: 'Dúo acústico indie' },
]

export default function Amigos() {
  return (
    <div 
      className="h-full w-full flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAD_4273.jpg-gqvXOXqN08mb2r2IzfjTbwsVNB7jtE.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-4xl w-full relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Nuestros Amigos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amigos.map((amigo, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle>{amigo.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{amigo.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

