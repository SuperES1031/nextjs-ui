import Grid32 from '@components/molecules/Grid32'
import cn from 'classnames'
import styles from './PlansHowItWorks.module.scss'

export default function PlansHowItWorks({ classname }) {
  const data = [
    {
      image: "get_quote",
      subheading: "Get a quote",
      text: "Get an instant quote for the coverage you need.",
    },
    {
      image: "your_coverd",
      subheading: "Sign up online",
      text: "Sign up is easy – accept your quote and you’re on your way.",
    },
    {
      image: "manage_account",
      subheading: "Manage your account online",
      text: "It’s simple to add or remove Pretzel products in your online account.",
    },
    {
      image: "file_claims",
      subheading: "File claims in a click",
      text: "Use the Pretzel app or file online, hassle-free.",
    },
    {
      image: "live_happier",
      subheading: "Live happier",
      text: "Bask in the glory of knowing you’re protected by the best.",
    }
  ]

  return (
    <div className={cn(styles.root, classname)}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h2>
            Here’s how it works
          </h2>
        </div>
        <div className={styles.body}>
          <Grid32 data={data} className='text-[#1F1A3D]' />
        </div>
      </div>
    </div>
  )
}