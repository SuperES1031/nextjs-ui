import Background from '@components/atoms/Background'
import Image from '@components/atoms/Image'
import styles from './CarGraphic.module.scss'

export default function CarGraphic() {
  return (
    <div className={styles.root}>
      <Background image='graphic_left' className='left-0 top-[200px]' alt='background left' />
      <Background image='graphic_right' className='right-0 top-[30%]' alt='background right' />
      <div className={styles.wrap}>
        <Image src='car_graphic' alt='car graphic' />
      </div>
    </div>
  )
}