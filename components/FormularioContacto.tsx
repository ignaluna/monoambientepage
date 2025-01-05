'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí puedes agregar la lógica para enviar el formulario
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white p-4">
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-bold mb-8 text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="bg-white/10 border-none text-white placeholder-gray-400"
          />
          <Input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 border-none text-white placeholder-gray-400"
          />
          <Textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="bg-white/10 border-none text-white placeholder-gray-400"
          />
          <Button type="submit" className="w-full">Enviar mensaje</Button>
        </form>
      </div>
    </div>
  )
}

