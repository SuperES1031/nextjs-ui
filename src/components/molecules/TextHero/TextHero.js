import styles from './TextHero.module.scss'

export default function TextHero({ heading, subheading }) {
  return (
    <div className={styles.wrap}>
      {heading && (
        <h1 className={styles.heading}>
          {heading}
        </h1>
      )}
      {subheading && (
        <p className={styles.subheading}>{subheading}</p>
      )}
    </div>
  )
}