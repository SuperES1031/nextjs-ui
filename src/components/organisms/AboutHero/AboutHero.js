import Background from '@components/atoms/Background';
import Image from '@components/atoms/Image';
import TextHeading from '@components/molecules/TextHeading';
import Link from 'next/link';
import styles from './AboutHero.module.scss';

export default function AboutHero(props) {
  const text = props.text
  const image = props.image
  const button = props.button

  return (
    <div className={styles.root}>
      <Background image='plans_left' className='bottom-0' alt='background left' />
      <Background image='plans_right' className='right-0' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <TextHeading heading={text.heading} subheading={text.text} />
        </div>
        <div className={styles.body}>
          <Image src={image} alt='plans hero' />
        </div>
        {button?.link && (
          <div className={styles.footer}>
            <Link href={button.link}>
              <a className='btn'>{button.text}</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}