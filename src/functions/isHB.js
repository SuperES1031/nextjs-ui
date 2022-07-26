export default function isHB(asPath) {
  return (
    asPath === '/' ||
    asPath.includes('product')
  )
}