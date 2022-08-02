import styles from './NATextHeading.module.scss'

export default function NATextHeading({ heading, heading1, heading2, subheading, text }) {

  return (
    <div>
      <div className={styles.wrap}>
        {heading && (
          <h2 className={styles.heading}>
            <span>{heading}</span>
            {heading1 && (
              < span className='text-[#EE2E64]'>{' '} {heading1}</span>
            )}
            {heading2 && (
              <span>{' '}{heading2}</span>
            )}
          </h2>
        )}

        {subheading && (
          <p className={styles.subheading}>{subheading}</p>
        )}

        {text && (
          <p className={styles.text}>{text}</p>
        )}
      </div>
    </div >
  )
}