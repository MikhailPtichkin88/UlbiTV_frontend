export function generateUniqueId() {
  const timestamp = new Date().getTime()
  const randomNum = Math.floor(Math.random() * 10000)
  const uniqueId = `${timestamp}-${randomNum}`
  return uniqueId
}
