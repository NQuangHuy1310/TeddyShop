import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { eventService } from './eventService'
import { eventModal, scheduleModal } from '~/models/event'

const initialState = {
  events: [] as eventModal[],
  event: {} as eventModal,
  schedules: [] as scheduleModal[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const getEvents = createAsyncThunk('event/getEvents', async () => {
  try {
    return await eventService.getEvents()
  } catch (error) {
    return error
  }
})

export const getEvent = createAsyncThunk('event/getEvent', async (eventId: string) => {
  try {
    return await eventService.getEvent(eventId)
  } catch (error) {
    return error
  }
})

export const getScheduleByEventId = createAsyncThunk('event/getSchedules', async (eventId: string) => {
  try {
    return await eventService.getScheduleByEventId(eventId)
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEvents.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.events = action.payload.events
      })
      .addCase(getEvents.rejected, (state) => {
        state.isError = false
      })
      .addCase(getEvent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEvent.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.event = action.payload.event
      })
      .addCase(getEvent.rejected, (state) => {
        state.isError = false
      })
      .addCase(getScheduleByEventId.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getScheduleByEventId.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.schedules = action.payload.schedules
      })
      .addCase(getScheduleByEventId.rejected, (state) => {
        state.isError = false
      })
      .addCase(resetState, () => initialState)
  }
})

export default eventSlice.reducer
