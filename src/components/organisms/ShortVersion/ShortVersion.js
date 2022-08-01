import GridImage from '@components/molecules/GridImage';
import SeePlans from '@components/molecules/SeePlans';
import TextHeading from '@components/molecules/TextHeading';
import styles from './ShortVersion.module.scss';

export default function ShortVersion() {
  const text = {
    heading: "The short version",
    subheading: "Pretzel is a new company backed by some of the top financial institutions in the world (yay) offering protection plans for your vehicle, home, phone, and other technology."
  }

  const text1 = "Here’s how it works:"
  const text2 = "Basically? We protect you and your important stuff. "

  const works = [
    {
      image: "flat_low_rates",
      subheading: "You pay a flat, low monthly premium"
    },
    {
      image: "quick_easy_payments",
      subheading: "When your stuff breaks down, you file a claim on our app"
    },
    {
      image: "unexpected_expenses",
      subheading: "We cover repairs and replacements"
    },
    {
      image: "money_left",
      subheading: "And when we have money left over, we give it to a good cause"
    }
  ]

  const seeplan = [
    {
      image: "vehicle",
      subheading: "Your Vehicle",
      text: "Breakdowns happen. Protect your transmission, brakes, A/C, and more.",
      cta: "See Plans",
      ctalink: "/",
      price: "79.99"
    },
    {
      image: "home",
      subheading: "Your Home",
      text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
      cta: "See Plans",
      ctalink: "/",
      price: "39.99"
    },
    {
      image: "electronics",
      subheading: "Your Electronics",
      text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
      cta: "See Plans",
      ctalink: "/",
      price: "24.99"
    },
    {
      image: "phone",
      subheading: "Your Phone",
      text: "Your smartphone is essential. Cover it for just a few dollars a month.",
      cta: "See Plans",
      ctalink: "/",
      price: "8.00"
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
          <TextHeading subheading={text1} />
        </div>
        <div>
          <GridImage data={works} />
        </div>
        <div className={styles.text}>
          <TextHeading subheading={text2} />
        </div>
        <div className={styles.bottom}>
          <SeePlans seeplan={seeplan} />
        </div>
      </div>
    </div>
  )
}