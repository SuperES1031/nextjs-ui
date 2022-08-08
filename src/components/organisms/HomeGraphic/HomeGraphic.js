import Background from '@components/atoms/Background'
import Image from '@components/atoms/Image'
import cn from 'classnames'
import styles from './HomeGraphic.module.scss'

export default function HomeGraphic({ graphic, className }) {
  return (
    <div className={styles.root}>
      <Background image='graphic_left' className='left-0 top-[200px]' alt='background left' />
      <Background image='graphic_right' className='right-0 top-[30%]' alt='background right' />
      <div className={cn(styles.wrap, className)}>
        <Image src={graphic} alt='home graphic' />
      </div>
    </div>
  )
}