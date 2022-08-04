import Background from '@components/atoms/Background'
import Image from '@components/atoms/Image'
import NATextHeading from '@components/molecules/NATextHeading'
import Link from 'next/link'
import styles from './Partners.module.scss'

export default function Partners() {
  const text = {
    subheading: "Pretzel wants everyone's life to be better. Not just in warranty, further than that. When becoming a customer, you will have a choice of non-profit causes to share a portion of your new warranty investment with. We've selected multiple causes we want to support as no charitable situation is above the other, so we leave it to you to make a heartfelt decision and we'll then donate a portion of our profits."
  }

  const data = [
    {
      image: "charity_logo",
      subheading: "Environment",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do tiem.",
      link: "./partners/environment"
    },
    {
      image: "charity_logo",
      subheading: "Children",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do tiem.",
      link: "./partners/children"
    },
    {
      image: "charity_logo",
      subheading: "Furry friends",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do tiem.",
      link: "./partners/furry-friends"
    },
    {
      image: "charity_logo",
      subheading: "Social justice",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do tiem.",
      link: "./partners/social-justice"
    },
    {
      image: "charity_logo",
      subheading: "Cancer",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do tiem.",
      link: "./partners/cancer"
    },
    {
      image: "charity_logo",
      subheading: "World hunger",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do tiem.",
      link: "./partners/world-hunger"
    }
  ]

  return (
    <div className={styles.root}>
      <Background image='plans_left' className='hidden md:block top-[40%]' alt='background left' />
      <Background image='plans_right' className='hidden md:block right-0' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <NATextHeading subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <ul>
            {data && data.map((item, index) => (
              <li key={index} className=''>
                {item.image && (
                  <Image src={item.image} className={styles.image} alt={item.subheading} />
                )}
                {item.subheading && (
                  <p className={styles.subheading} >{item.subheading}</p>
                )}
                {item.text && (
                  <p className={styles.text} >{item.text}</p>
                )}
                {item.link && (
                  <Link href={item.link}>
                    <a>Learn More</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}