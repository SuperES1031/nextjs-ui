import Image from '@components/atoms/Image'
import GridImage from '@components/molecules/GridImage'
import TextHeading from '@components/molecules/TextHeading'
import styles from './Mention.module.scss'

export default function Mention() {
  const text = {
    heading: "Not to mention all the great perks…",
    subheading: "Your Pretzel plan also offers regular maintenance benefits like oil changes and tire rotations – no add-on required. We’re just nice like that.",
    subheading1: "What do we mean by maintenance benefits? How about payments toward your…"
  }

  const data1 = [
    {
      image: "oil",
      subheading: "Oil and filter change"
    },
    {
      image: "lube",
      subheading: "Cooling system maintenance and lube services"
    },
    {
      image: "failed_battery",
      subheading: "Failed battery replacement"
    }
  ]

  const data2 = [
    {
      image: "lift",
      subheading: "When you really need a lift",
      text: "Free towing up to 25 miles"
    },
    {
      image: "rent",
      subheading: "When you still have to get around",
      text: "Rental vehicle reimbursements when you have a mechanical breakdown"
    },
    {
      image: "key_service",
      subheading: "When you, uh, can’t get in (oops)",
      text: "Lockout service when your keys get locked in your car"
    },
    {
      image: "windshields",
      subheading: "When there’s something else you need",
      text: "From windshields to wheels, we have tons of awesome add-ons to make your life a little easier."
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
          <div className={styles.text}>
            <TextHeading subheading={text.subheading1} />
          </div>
        </div>
        <div className={styles.body}>
          <GridImage data={data1} />
          <div className={styles.image}>
            <Image src="much_more" alt="text" />
          </div>
        </div>
        <div className={styles.footer}>
          <GridImage data={data2} />
        </div>
      </div>
    </div>
  )
}