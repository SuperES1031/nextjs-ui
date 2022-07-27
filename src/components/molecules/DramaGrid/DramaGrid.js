import Image from '@components/atoms/Image'
import styles from './DramaGrid.module.scss'

export default function DramaGrid(props) {
  const items = props.data

  return (
    <div>
      <ul className={styles.wrap}>
        {items.map((item, index) => (
          <li key={index}>
            {item.image && (
              <span>
                <Image src={item.image} className={styles.image} alt={item.subheading} />
              </span>
            )}
            {item.subheading && (
              <p className={styles.subheading} >{item.subheading}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}