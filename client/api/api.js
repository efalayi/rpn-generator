import 'whatwg-fetch'

const API_BASE_URL = `${process.env.API_URL}/api/v1`

function handleResponse(response) {
  return response.json()
}

const getPhoneNumbers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts/phone-numbers`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    return handleResponse(response)
  } catch (error) {
    return error
  }
}

const generateNewPhoneNumbers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts/generate`, {
      method: 'POST',
      credentials: 'same-origin',
    })
    return handleResponse(response)
  } catch (error) {
    return error
  }
}

export default {
  generateNewPhoneNumbers,
  getPhoneNumbers
}
