import axios from '~/apis/axiosConfig'

const getEvents = async () => {
  return await axios.get('event')
}

const getEvent = async (id: string) => {
  return await axios.get(`event/${id}`)
}

const getScheduleByEventId = async (eventId: string) => {
  return await axios.get(`schedule?event=${eventId}`)
}

export const eventService = {
  getEvents,
  getEvent,
  getScheduleByEventId
}
