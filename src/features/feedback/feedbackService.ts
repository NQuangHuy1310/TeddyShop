import axios from '~/apis/axiosConfig'
import { feedbackData } from '~/models/feedback'

const sendFeedback = async (feedbackData: feedbackData) => {
  return await axios.post('feedback', feedbackData)
}

export const feedbackService = {
  sendFeedback
}
