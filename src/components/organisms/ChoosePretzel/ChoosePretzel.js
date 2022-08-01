import CompareChart from '@components/atoms/CompareChart'
import TextSubHeading from '../../molecules/TextSubHeading'
import styles from './ChoosePretzel.module.scss'

export default function ChoosePretzel() {
  const text = {
    subheading1: "Why choose",
    subheading2: "Pretzel",
    subheading3: "?",
    text: "Pretzel is the only company offering comprehensive protection plans B2C (that means directly to you, instead of working with another company)."
  }

  const text1 = {
    text: "Why does that matter? We work for you, not the company that made your dishwasher, not the store where you bought your laptop – you. That means our job is to make you happy first."
  }

  const text2 = {
    text: "Plus, we give to great causes chosen by customers like you."
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <TextSubHeading text={text} />
        <TextSubHeading text={text1} />
        <TextSubHeading text={text2} />
      </div>
      <div className={styles.body}>
        <CompareChart />
      </div>
    </div>
  )
}