import styles from './TextHeading.module.scss'

export default function TextHeading({ heading, subheading, text }) {
  return (
    <section>
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
    </section>
  )
}