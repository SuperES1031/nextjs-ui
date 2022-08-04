export default function isHB(asPath) {
  return (
    asPath === '/' ||
    asPath.includes('products') ||
    asPath.includes('car') ||
    asPath.includes('homes') ||
    asPath.includes('phone') ||
    asPath.includes('electronics')
  )
}