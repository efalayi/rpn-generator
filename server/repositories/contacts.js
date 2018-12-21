import readFromFile from '../helpers/readFromFile'
import appPaths from '../../config/paths'
import PhoneNumberFactory from '../factories/phoneNumberFactory'

const CONTACTS_FILE_PATH = `${appPaths.appData}/contacts.json`

const getPhoneNumbers = async () => {
  try {
    const phoneNumbers = await readFromFile(CONTACTS_FILE_PATH, 'phoneNumbers')
    return phoneNumbers
  } catch (error) {
    throw (error)
  }
}

const generateNewPhoneNumbers = async () => {
  const newPhoneNumbers = await PhoneNumberFactory.buildList(10, CONTACTS_FILE_PATH, true)
  return newPhoneNumbers
}

export default {
  generateNewPhoneNumbers,
  getPhoneNumbers
}
