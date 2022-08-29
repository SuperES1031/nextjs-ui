export default function isHB(asPath) {
  return (
    asPath === '/' ||
    asPath === 'products' ||
    asPath === 'car' ||
    asPath === 'homes' ||
    asPath === 'phone' ||
    asPath === 'electronics'
  )
}