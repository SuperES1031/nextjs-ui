import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Background.module.scss'
import Image from '../Image'

export default function Background({ image, className }) {
  return (
    <div className={cn(styles.root, className)}>
      <Image src={image} />
    </div>
  )
}

Background.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
}

