import Image from '@components/atoms/Image'
import GridImage from '@components/molecules/GridImage'
import TextHeading from '@components/molecules/TextHeading'
import Link from 'next/link'
import styles from './Taste.module.scss'

export default function Taste({ text, data, button }) {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <GridImage data={data} className='!items-baseline' />
        </div>
        <div className={styles.footer}>
          {button.icon && (
            <Image src={button.icon} alt="button icon" />
          )}
          <Link href={button.link}>
            <a className='text-2xl'>
              View All
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}