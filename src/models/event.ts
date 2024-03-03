export interface eventModal {
  _id: string
  name: string
  title: string
  description: string
  time: string
  location: string
  startDate: string
  endDate: string
  tag: string
  type: string
}

export interface scheduleModal {
  _id: string
  name: string
  date: string
  time: string
  type: string[]
  images?: []
}
