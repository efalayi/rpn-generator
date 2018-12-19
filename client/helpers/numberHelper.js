const convertToInteger = numberString => Number.parseInt(numberString, 10)

class NumberHelper {
  static getPhoneNumbersCount = phoneNumbers => phoneNumbers.length

  static sortPhoneNumbers(phoneNumbers, direction) {
    const phoneNumbersCopy = [...phoneNumbers]
    const sortedNumbers = phoneNumbersCopy.sort((a, b) => convertToInteger(a) - convertToInteger(b))
    return direction === 'dsc' ? sortedNumbers.reverse() : sortedNumbers
  }

  static getMaxPhoneNumber(phoneNumbers) {
    const sortedNumbers = NumberHelper.sortPhoneNumbers(phoneNumbers, 'dsc')
    return sortedNumbers[0]
  }

  static getMinPhoneNumber(phoneNumbers) {
    const sortedNumbers = NumberHelper.sortPhoneNumbers(phoneNumbers, 'asc')
    return sortedNumbers[0]
  }
}

export default NumberHelper
