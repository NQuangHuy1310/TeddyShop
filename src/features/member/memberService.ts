import axios from '~/apis/axiosConfig'

const getMembers = async () => {
  return await axios.get('member')
}

export const memberService = {
  getMembers
}
