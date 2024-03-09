import axios from 'axios'

export const getVietnamCities = async () => {
  const response = await axios.get('http://api.geonames.org/searchJSON', {
    params: {
      q: 'Vietnam',
      country: 'VN',
      featureClass: 'P',
      maxRows: 50,
      username: 'nguyenquanghuy'
    }
  })

  if (response.status === 200) {
    return response.data.geonames
  }
}

export const getDistrisOfCity = async (code: number, name: string) => {
  const response = await axios.get('http://api.geonames.org/searchJSON', {
    params: {
      maxRows: 50,
      adminCode: code,
      q: name,
      country: 'VN',
      featureClass: 'A',
      username: 'nguyenquanghuy'
    }
  })

  if (response.status === 200) {
    return response.data.geonames
  }
}

export const getWardsOfDistrict = async (districtName: string, code: number) => {
  const response = await axios.get('http://api.geonames.org/searchJSON', {
    params: {
      q: districtName,
      country: 'VN',
      adminCode1: code,
      featureClass: 'P',
      maxRows: 50,
      username: 'nguyenquanghuy'
    }
  })

  if (response.status === 200 && response.data.geonames) {
    return response.data.geonames
  }
}
