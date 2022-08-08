import Grid32 from '@components/molecules/Grid32'
import TextHeading from '@components/molecules/TextHeading'
import styles from './OurMission.module.scss'

export default function OurMission() {
  const text = {
    heading: "Our mission is to make life better through better protection.",
    subheading: "Here’s how we’re doing it."
  }

  const data = [
    {
      image: "your_coverd",
      subheading: "Making get covered and making claims easier with simple, 100% online processes",
    },
    {
      image: "file_claims",
      subheading: "Actually paying eligible claims instead of just looking for excuses not to",
    },
    {
      image: "offering_plans_1",
      subheading: "Offering extended protection plans without the ick factor",
    },
    {
      image: "protect_budget_1",
      subheading: "Protecting your budget from unexpected expenses",
    },
    {
      image: "protect_budget_1",
      subheading: "Giving money to good causes",
    }
  ]

  const ftext = "We’re serving up protection plans that actually make sense. Ones you can get behind. It’s peace of mind with a side of mustard and a healthy sprinkling of salt."

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <Grid32 data={data} />
        </div>
        <div className={styles.footer}>
          <TextHeading subheading={ftext} />
        </div>
      </div>
    </div>
  )
}