import Image from '@components/atoms/Image';
import Grid from '@functions/grid';
import cn from 'classnames';
import Link from 'next/link';
import styles from './GridImage.module.scss';

export default function GridImage(props) {
  const items = props.data
  const classname = props.className

  return (
    <div>
      <ul className={cn(
        styles.wrap,
        items ? Grid(items.length) : "",
        classname,
      )}>
        {items && items.map((item, index) => (
          <li key={index} className=''>
            {item.image && (
              <Image src={item.image} className={styles.image} alt={item.subheading} />
            )}
            {item.subheading && (
              <p className={styles.subheading} >{item.subheading}</p>
            )}
            {item.text && (
              <p className={styles.text} >{item.text}</p>
            )}
            {item.link && (
              <Link href={item.link}>
                <a> Learn More</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}