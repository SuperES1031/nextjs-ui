import GridImage5 from '@components/molecules/GridImage5'
import TextHeading from '@components/molecules/TextHeading'
import Link from 'next/link'
import styles from './PretzelMean.module.scss'
export default function PretzelMean() {
  const text = {
    heading: "Pretzel means coverage with a heart",
    subheading: "When we say our mission is making life better through better protection, we mean making the world better too. That’s why we make regular donations to charities chosen by Pretzel customers like you.",
    text: "(we’re a soft, warm pretzel)"
  }

  const images = [
    { image: 'wags' },
    { image: 'wwf' },
    { image: 'world_cent_kitchen' },
    { image: 'unicef' },
    { image: 'directrelief' }
  ]

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{text.heading}</h2>
          <p className={styles.text}>{text.text}</p>
          <TextHeading subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <GridImage5 data={images} />
        </div>
        <div className={styles.footer}>
          <Link href="/">
            <a className='btn'>
              Learn more
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}