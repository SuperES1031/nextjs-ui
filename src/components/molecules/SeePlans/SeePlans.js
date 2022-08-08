import Image from '@components/atoms/Image'
import Grid from '@functions/grid'
import cn from 'classnames'
import Link from 'next/link'
import styles from './SeePlans.module.scss'

export default function SeePlans(props) {
  const items = props.seeplan

  return (
    <div>
      <ul className={cn(
        styles.wrap,
        items ? Grid(items.length) : ""
      )}>
        {items.map((item, index) => (
          <li key={index}>
            {item.image && (
              <Image src={item.image} className={styles.image} alt={item.subheading} />
            )}
            {item.subheading && (
              <p className={styles.subheading} >{item.subheading}</p>
            )}
            {item.text && (
              <p className={styles.text}>{item.text}</p>
            )}
            {item.ctalink && (
              <Link href={item.ctalink}>
                <a className={cn(styles.btn, 'cta')}>{item.cta}</a>
              </Link>
            )}
            {item.price && (
              <p className={styles.price}>FROM ${item.price}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}