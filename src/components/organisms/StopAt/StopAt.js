import SeePlans from '@components/molecules/SeePlans'
import TextHeading from '@components/molecules/TextHeading'
import styles from './StopAt.module.scss'

export default function StopAt() {
  const text = {
    heading: "Why stop at one Pretzel when you can have the whole bag?",
    subheading: "Everything that matters, protected."
  }
  const data = [
    {
      image: "home_product",
      subheading: "Your Home",
      text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
      cta: "See Plans",
      ctalink: "/",
      price: "39.99"
    },
    {
      image: "electronics_product",
      subheading: "Your Electronics",
      text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
      cta: "See Plans",
      ctalink: "/",
      price: "24.99"
    },
    {
      image: "phone_product",
      subheading: "Your Phone",
      text: "Your smartphone is essential. Cover it for just a few dollars a month.",
      cta: "See Plans",
      ctalink: "/",
      price: "8.00"
    }
  ]

  return (
    <div className='bg-[#F5F4FA]'>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <SeePlans seeplan={data} />
        </div>
      </div>
    </div>
  )
}