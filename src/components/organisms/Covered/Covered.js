import TextHeading from '@components/molecules/TextHeading'
import styles from './Covered.module.scss'

export default function Covered() {
  const text = {
    heading: "A few clicks and you’re covered.",
    subheading: "Your best bud on wheels can be protected today."
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <TextHeading heading={text.heading} subheading={text.subheading} />
      </div>
      <div className={styles.body}>

      </div>
    </div>
  )
}