import GridImage from '@components/molecules/GridImage'
import NATextHeading from '@components/molecules/NATextHeading'
import styles from './Breakdown.module.scss'

export default function Breakdown() {
  const text = {
    heading: "Breakdowns are ",
    heading1: "50 times",
    heading2: "more likely than accidents.",
    subheading: "And insurance? It doesn’t cover breakdowns. Protect yourself against surprise bills with Pretzel."
  }

  const data = [
    {
      image: 'break_down',
      subheading: "When your brakes break down",
      text: "Average brake pad replacement: $150-$300 per axle"
    },
    {
      image: 'engine_parts',
      subheading: "When your engine parts peace out",
      text: "Average engine rebuild: $2,500 to $4,000 in parts and labor"
    },
    {
      image: 'hike',
      subheading: "When your transmission takes a hike",
      text: "New transmission: $1,800 to $3,400 not including labor"
    }
  ]

  const bottomText = "Vehicle repairs and part replacements can cost you thousands.   We’re here to keep your life running – and even, dare we say, make it better?"

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <NATextHeading
            heading={text.heading}
            heading1={text.heading1}
            heading2={text.heading2}
            subheading={text.subheading}
          />
        </div>
        <div className={styles.body}>
          <GridImage data={data} className='!text-[#1F1A3D]' />
        </div>
        <div className={styles.footer}>
          <NATextHeading subheading={bottomText} />
        </div>
      </div>
    </div>
  )
}