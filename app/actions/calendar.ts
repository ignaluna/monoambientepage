'use server'

import { google } from 'googleapis'

const calendar = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_API_KEY
})

const CALENDAR_ID = 'monoambientemusicacba@gmail.com'

export async function getCalendarEvents() {
  try {
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
      fields: 'items(id,summary,location,description,start,end)' // Optimize by requesting only needed fields
    })

    return response.data.items?.map(event => ({
      id: event.id,
      titulo: event.summary,
      fecha: event.start?.dateTime || event.start?.date,
      fechaFin: event.end?.dateTime || event.end?.date,
      lugar: event.location,
      descripcion: event.description
    })) || []
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return []
  }
}

