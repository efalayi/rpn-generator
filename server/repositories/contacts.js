import readFromFile from '../helpers/readFromFile'
import appPaths from '../../config/paths'

const CONTACTS_FILE_PATH = `${appPaths.appData}/contacts.json`

const getPhoneNumbers = async () => {
  try {
    const phoneNumbers = await readFromFile(CONTACTS_FILE_PATH, 'phoneNumbers')
    return phoneNumbers
  } catch (error) {
    throw (error)
  }
}

export default {
  getPhoneNumbers
}
