import Image from '@components/atoms/Image'
import styles from './Hero.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default function Hero({ image, heading, subheading, text, button, buttonlink }) {

  return (
    <div className='relative'>
      <Image
        src={image}
        className="w-screen h-[75vh] md:h-screen object-cover"
        alt="home hero"
      />
      <div className={cn(styles.wrap, 'center')}>
        {heading && (
          <h1 className={styles.heading}>{heading}</h1>
        )}
        {text && (
          <p className={styles.text}>{text}</p>
        )}
        {subheading && (
          <p className={styles.subheading}>{subheading}</p>
        )}
        <div className={styles.btn}>
          {button && (
            <a href={buttonlink} className="btn">{button}</a>
          )}
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  buttonlink: PropTypes.string
}
