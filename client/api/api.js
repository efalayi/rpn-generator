import 'whatwg-fetch'

const API_BASE_URL = `${process.env.API_URL}/api/v1`

function handleResponse(response) {
  return response.json()
}

function handleError(error) {
  console.log('server error: ', error)
  return error
}

const getPhoneNumbers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts/phone-numbers`, {
      credentials: 'same-origin',
    })
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}

const generateNewPhoneNumbers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts/generate`, {
      credentials: 'same-origin',
    })
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}

export default {
  generateNewPhoneNumbers,
  getPhoneNumbers
}