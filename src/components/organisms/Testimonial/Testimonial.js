import Carousel from '@components/molecules/Carousel'
import styles from './Testimonial.module.scss'

export default function Testimonial() {
  const text = {
    heading: "We think our protection plans are pretty great.",
    subheading: "But why take our word for it? Get the unsalted truth from real Pretzel customers."
  }

  const testimonial = [
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      name: "John Dow"
    },
    {
      text: "Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
      name: "Lisa Dow"
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      name: "John Dow"
    }
  ]

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{text.heading}</h2>
          <p className={styles.text}>{text.subheading}</p>
        </div>
        <div className={styles.body}>
          <Carousel testimonial={testimonial} />
        </div>
      </div>
    </div>
  )
}