import SeePlans from '@components/molecules/SeePlans'
import TextHeading from '@components/molecules/TextHeading'
import styles from './StopAt.module.scss'

export default function StopAt({ text, data }) {
  return (
    <div className='bg-[#F5F4FA]'>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <SeePlans seeplan={data} />
        </div>
      </div>
    </div>
  )
}