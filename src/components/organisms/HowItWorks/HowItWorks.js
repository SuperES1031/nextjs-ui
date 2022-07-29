import Background from '@components/atoms/Background'
import GridImage from '@components/molecules/GridImage'
import TextHeading from '@components/molecules/TextHeading'
import styles from './HowItWorks.module.scss'

export default function HowItWorks(props) {
  const textData = props.data[0]
  const works = props.data[1]
  const images = props.data[2]
  return (
    <div className='relative'>
      <Background image={images.beforeIcon} className='' />
      <Background image={images.afterIcon} className='right-0 bottom-0' />
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <TextHeading
            heading={textData.heading}
            subheading={textData.subheading}
          />
        </div>
        <div className={styles.body}>
          <GridImage data={works} />
        </div>
      </div>
    </div>
  )
}