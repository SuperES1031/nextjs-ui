import styles from './GridImage5.module.scss'
import cn from 'classnames';
import Image from '@components/atoms/Image';

export default function GridImage5(props) {
  const items = props.data
  const classname = props.className

  return (
    <div>
      <ul className={cn(
        styles.wrap,
        classname
      )}>
        {items.map((item, index) => (
          <li key={index} className=''>
            {item.image && (
              <Image src={item.image} className={styles.image} alt={item.subheading} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}