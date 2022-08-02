import cn from 'classnames'
import Image from '../Image'
import styles from './AccordionItem.module.scss'

export default function AccordionItem({
  showDescription,
  ariaExpanded,
  item,
  index,
  icon,
  onClick
}) {
  return (
    <div className={styles.wrap}>
      <div className={cn(styles.head, ariaExpanded)} onClick={onClick}>
        <Image src={icon} alt={'icon' + index} />
        {item.title}
        <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.55566 24.5L13.5462 13.5L2.55566 2.5" stroke="#1F1A3D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={cn(styles.body, showDescription)}>
        <p>
          {item.text}
        </p>
      </div>
    </div>
  )
}