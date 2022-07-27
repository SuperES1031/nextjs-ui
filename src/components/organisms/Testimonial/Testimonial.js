import styles from './Testimonial.module.scss'

export default function Testimonial() {
  const text = {
    heading: "We think our protection plans are pretty great.",
    subheading: "But why take our word for it? Get the unsalted truth from real Pretzel customers."
  }

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{text.heading}</h2>
          <p className={styles.text}>{text.subheading}</p>
        </div>
        <div className={styles.body}>

        </div>
      </div>
    </div>
  )
}