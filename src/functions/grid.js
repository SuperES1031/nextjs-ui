
export default function Grid(n) {
  if (n === 6) {
    return "md:grid-cols-2 lg:grid-cols-3"
  } else if (n % 5 == 0) {
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
  } else if (n % 4 == 0) {
    return "md:grid-cols-2 lg:grid-cols-4"
  } else if (n % 3 == 0) {
    return "md:grid-cols-1 lg:grid-cols-3"
  } else if (n % 2 == 0) {
    return "grid-cols-2"
  } else {
    return ""
  }
}