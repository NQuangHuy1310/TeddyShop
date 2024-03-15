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

const addUserSubscribeEvent = async (data: { eventId: string; email: string }) => {
  return await axios.put('event/subscribe-event', data)
}

export const eventService = {
  getEvents,
  getEvent,
  getScheduleByEventId,
  addUserSubscribeEvent
}
