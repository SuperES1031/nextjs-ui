import styles from './OurProcess.module.scss'

export default function OurProcess() {
  const data = [
    {
      heading: "01",
      subheading: "Review",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "02",
      subheading: "Initial Interview",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "03",
      subheading: "Mini Project ",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "04",
      subheading: "Final Interview",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "05",
      subheading: "Offer",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "06",
      subheading: "Career Launch",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },

  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h2>Our process</h2>
        </div>
        <div className={styles.body}>

        </div>
      </div>
    </div>
  )
}