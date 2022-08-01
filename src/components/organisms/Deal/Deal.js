import Background from '@components/atoms/Background'
import GridImage5 from '@components/molecules/GridImage5'
import TextHeading from '@components/molecules/TextHeading'
import styles from './Deal.module.scss'

export default function Deal() {
  const text = {
    heading: "Here’s the deal with the delicious do-goodness",
    subheading: "You choose a charity when you sign up – which you can change at any time throughout the year. Periodically, when there’s money left over from claims, we give to the charity of your choosing.",
    subheading2: "Here are a few of the nice folks we support:"
  }

  const images = [
    { image: 'wags' },
    { image: 'wwf' },
    { image: 'world_cent_kitchen' },
    { image: 'unicef' },
    { image: 'directrelief' }
  ]

  return (
    <div className={styles.root}>
      <Background image='deal_left' className=' bottom-[15%]' />
      <Background image='deal_right' className='right-0 bottom-[10%]' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
          <TextHeading subheading={text.subheading2} />
        </div>
        <div className={styles.body}>
          <GridImage5 data={images} />
        </div>
      </div>
    </div>
  )
}