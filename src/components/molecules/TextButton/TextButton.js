import Link from 'next/link'
import TextHeading from '../TextHeading'
import styles from './TextButton.module.scss'

export default function TextButton() {
  const text = {
    heading: "Peace of mind has never been more affordable.",
    subheading: "Save when you bundle."
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading
            heading={text.heading}
            subheading={text.subheading}
          />
        </div>
        <div className={styles.body}>
          <Link href='./'>
            <a className='btn'> BUILD YOUR BUNDLE</a>
          </Link>
        </div>
      </div>
    </div>
  )
}