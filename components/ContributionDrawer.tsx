'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitContribution } from "@/app/actions/contributions"

type Project = {
  id: string
  title: string
  description: string
  goal: number
  current: number
  currency: string
  image: string
}

type ContributionDrawerProps = {
  project: Project | undefined
  onClose: () => void
  onSuccess: () => void
}

const paymentMethods = {
  ARS: {
    title: 'Mercado Pago',
    details: {
      alias: 'mono.ambiente',
      cbu: '0000003100093708520640'
    }
  },
  UYU: {
    title: 'Mi Dinero',
    details: {
      alias: 'mono.ambiente.uy',
      cbu: '000000789123456789'
    }
  },
  BINANCE: {
    title: 'Binance Pay',
    details: {
      id: 'monoambiente2024'
    }
  }
}

export function ContributionDrawer({ project, onClose, onSuccess }: ContributionDrawerProps) {
  const [step, setStep] = useState<'currency' | 'form'>('currency')
  const [currency, setCurrency] = useState<'ARS' | 'UYU' | 'BINANCE'>('ARS')
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    message: '',
    contact: ''
  })

  if (!project) return null

  const handleCurrencySelect = (value: 'ARS' | 'UYU' | 'BINANCE') => {
    setCurrency(value)
    setStep('form')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await submitContribution({
      projectId: project.id,
      amount: Number(formData.amount),
      name: formData.name,
      message: formData.message,
      contact: formData.contact,
      currency
    })

    if (result.success) {
      onSuccess()
    }
  }

  return (
    <Drawer open={!!project} onClose={onClose}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{project.title}</DrawerTitle>
            <DrawerDescription>
              {step === 'currency' 
                ? 'Selecciona tu moneda preferida'
                : 'Completa los detalles de tu aporte'
              }
            </DrawerDescription>
          </DrawerHeader>

          {step === 'currency' ? (
            <div className="p-4 space-y-4">
              <Select onValueChange={handleCurrencySelect}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una moneda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ARS">Pesos Argentinos (ARS)</SelectItem>
                  <SelectItem value="UYU">Pesos Uruguayos (UYU)</SelectItem>
                  <SelectItem value="BINANCE">Binance Pay</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount">Monto en {currency}</Label>
                  <Input
                    id="amount"
                    type="number"
                    required
                    value={formData.amount}
                    onChange={e => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="contact">Contacto (teléfono o Instagram)</Label>
                  <Input
                    id="contact"
                    required
                    value={formData.contact}
                    onChange={e => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <h4 className="font-medium">Datos de pago para {paymentMethods[currency].title}</h4>
                  {currency === 'BINANCE' ? (
                    <p>ID: {paymentMethods[currency].details.id}</p>
                  ) : (
                    <>
                      <p>Alias: {paymentMethods[currency].details.alias}</p>
                      <p>CBU: {paymentMethods[currency].details.cbu}</p>
                    </>
                  )}
                </div>
              </div>

              <DrawerFooter>
                <Button type="submit">Enviar</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

