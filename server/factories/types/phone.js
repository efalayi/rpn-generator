const phone = (digits) => {
  const randomNumber = Math.random()
  const [zero, nonZero] = randomNumber.toString().split('.')
  const truncatedNonZero = nonZero.slice(0, digits - 1)
  const phoneNumber = [zero, ...truncatedNonZero]
  return phoneNumber.join('')
}

export default phone
