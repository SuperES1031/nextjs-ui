import Image from '@components/atoms/Image';
import styles from './GridImage.module.scss';

export default function GridImage(props) {
  const items = props.data
  console.log
  return (
    <div>
      <ul className={styles.wrap}>
        {items.map((item, index) => (
          <li key={index}>
            {item.image && (
              <Image src={item.image} className={styles.image} alt={item.subheading} />
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