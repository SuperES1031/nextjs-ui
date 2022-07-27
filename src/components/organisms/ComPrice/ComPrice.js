import Background from '@components/atoms/Background'
import RichText from '@components/molecules/RichText'
import SeePlans from '@components/molecules/SeePlans'
import styles from './ComPrice.module.scss'


export default function ComPrice(props) {
  const richtext = props.comprice[0]
  const seeplan = props.comprice[1]
  const images = props.comprice[2]


  return (
    <div className='relative'>
      <Background image={images.beforeIcon} />
      <Background image={images.afterIcon} className='right-0 bottom-0' />
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <RichText
            heading={richtext.heading}
            subheading={richtext.subheading}
          />
        </div>
        <div className={styles.body}>
          <SeePlans seeplan={seeplan} />
        </div>
      </div>
    </div>
  )
}