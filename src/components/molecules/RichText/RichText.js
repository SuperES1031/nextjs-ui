import styles from './RichText.module.scss'

export default function RichText({ heading, subheading, text }) {
  return (
    <div>
      <div className={styles.wrap}>
        {heading && (
          <h2 className={styles.heading}>{heading}</h2>
        )}

        {subheading && (
          <p className={styles.subheading}>{subheading}</p>
        )}

        {text && (
          <p className={styles.text}>{text}</p>
        )}

      </div>
    </div>
  )
}