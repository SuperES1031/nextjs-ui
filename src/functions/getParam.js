export default function GetParam(url) {
  if (url.includes('#')) return '#' + url.split('#')[1]
  else return null
}