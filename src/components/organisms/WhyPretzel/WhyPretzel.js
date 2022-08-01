import GridImage from '@components/molecules/GridImage'
import TextSubHeading from '@components/molecules/TextSubHeading'
import Link from 'next/link'
import styles from './WhyPretzel.module.scss'

export default function WhyPretzel() {
  const text = {
    subheading1: 'Why Pretzel?'
  }

  const data = [
    {
      image: 'online_purchasing',
      subheading: 'Easy, online purchasing',
      text: 'One flat monthly price, cancellable at any time, all managed online. '
    },
    {
      image: 'backed_best',
      subheading: 'Backed by the best',
      text: 'We’re backed by top financial institutions, including Allianz, AIG, and A+ financial.'
    },
    {
      image: 'big_bag',
      subheading: 'One big bag of pretzels',
      text: 'With Pretzel, all your coverage is bundled together, so you get more coverage for less moolah.'
    },
    {
      image: 'cover_heart',
      subheading: 'Coverage with a heart',
      text: 'Our mission is making life better through better protection. That’s why we make regular donations to charities chosen by Pretzel customers like you.'
    },
    {
      image: 'no_drama',
      subheading: 'Speed is our middle name',
      text: 'With Pretzel, you can get an easy, online quote, sign up online, file claims on the app, and manage your plan. No time wasted.'
    },
    {
      image: 'instant_quote',
      subheading: 'No more drama',
      text: 'We don’t do high pressure sales calls, we don’t send spooky letters to the elderly, and we won’t make you traverse the dark forest to cancel your plan.'
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextSubHeading text={text} />
        </div>
        <div className={styles.body}>
          <GridImage data={data} className='text-[#1F1A3D] !text-lg md:!text-body' />
        </div>
        <div className={styles.footer}>
          <Link href='./'>
            <a className='btn'> Get Pretezel</a>
          </Link>
        </div>
      </div>
    </div>
  )
}