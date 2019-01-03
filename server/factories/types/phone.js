const getNonZeroSecondDigitIndex = (nonZeroString) => {
  const stringArray = nonZeroString.split('')
  const secondDigitIndex = stringArray.findIndex(digit => digit !== '0')
  return secondDigitIndex
}

const phone = (digits) => {
  const randomNumber = Math.random()
  const [zero, nonZero] = randomNumber.toString().split('.')
  const secondDigitIndex = getNonZeroSecondDigitIndex(nonZero)
  const endIndex = secondDigitIndex + (digits - 1)
  const truncatedNonZero = nonZero.substring(secondDigitIndex, endIndex)
  const phoneNumber = [zero, ...truncatedNonZero]
  return phoneNumber.join('')
}

export default phone
