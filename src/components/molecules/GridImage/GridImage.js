import Image from '@components/atoms/Image';
import cn from 'classnames';
import styles from './GridImage.module.scss';

export default function GridImage(props) {
  const items = props.data
  const classname = props.className

  return (
    <div>
      <ul className={cn(styles.wrap, classname)}>
        {items.map((item, index) => (
          <li key={index} className=''>
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