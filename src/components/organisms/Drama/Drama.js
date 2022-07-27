import DramaGrid from '@components/molecules/DramaGrid'
import TextHeading from '@components/molecules/TextHeading'
import Link from 'next/link'
import styles from './Drama.module.scss'

export default function Drama() {
  const text = {
    heading: "No more drama",
    subheading: "We know what you’ve heard about extended warranties, but that’s not us. We’re here because, frankly? Extended warranties are broken, and we’re here to fix them. Simple as that. "
  }

  const data = [
    {
      image: "robo_calling",
      subheading: "We don’t do high pressure sales calls"
    },
    {
      image: "scary_letter",
      subheading: "We certainly don’t send spooky letters to the elderly"
    },
    {
      image: "claim",
      subheading: "We actually pay claims (rather than looking for excuses not to)"
    },
    {
      image: "cancel",
      subheading: "We’ll never make you traverse the dark forest or send certified mail to cancel your plan (in fact, you can do it in seconds online)"
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <TextHeading
            heading={text.heading}
            subheading={text.subheading}
          />
          <div className={styles.text}>
            <p>That means...</p>
          </div>
        </div>
        <div className={styles.body}>
          <DramaGrid data={data} />
        </div>
        <div className={styles.footer}>
          <Link href="/">
            <a className='btn'>60 second Quote</a>
          </Link>
        </div>
      </div>
    </div>
  )
}