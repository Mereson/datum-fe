export const handleInput = (e) => {
  let { name, value } = e.target
  value = value.slice(0, 1).toUpperCase() + value.slice(1, value.length)
  setParentsData(name, value)
}