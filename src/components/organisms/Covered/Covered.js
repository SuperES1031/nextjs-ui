import Image from '@components/atoms/Image'
import TextHeading from '@components/molecules/TextHeading'
import styles from './Covered.module.scss'

export default function Covered({text}) {

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <TextHeading heading={text.heading} subheading={text.subheading} />
      </div>
      <div className={styles.body}>
        <div className='hidden md:block'>
          <Image src='covered' alt='click and covered' />
        </div>
        <div className='md:hidden'>
          <Image src='covered_mobile' alt='click and covered' />
        </div>
      </div>
    </div>
  )
}