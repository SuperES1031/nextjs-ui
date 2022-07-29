import Image from '@components/atoms/Image'
import cn from 'classnames'
import styles from './Grid32.module.scss'

export default function Grid32(props) {
  const items = props.data
  const classnames = props.className

  return (
    <div className=''>
      <ul className={cn(styles.wrap, classnames)}>
        {items.map((item, index) => (
          <li key={index} className=''>
            {item.image && (
              <Image src={item.image} className={styles.image} alt={item.subheading} />
            )}
            {item.subheading && (
              <p className={styles.subheading} >{item.subheading}</p>
            )}
            {item.text && (
              <p className={styles.text}>{item.text}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}