import Background from '@components/atoms/Background'
import GridImage from '@components/molecules/GridImage'
import NATextHeading from '@components/molecules/NATextHeading'
import styles from './NotPsychic.module.scss'

export default function NotPsychic({ text, data, button }) {
  return (
    <div className={styles.root}>
      <Background image='break_left' className='left-0 top-[10%]' alt='background left' />
      <Background image='break_right' className='right-0 top-[30%]' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <NATextHeading heading={text?.heading} subheading={text?.subheading} />
          {text?.subheading1 && (
            <div>
              <NATextHeading subheading={text.subheading1} />
            </div>
          )}
        </div>
        <div className={styles.body}>
          <GridImage data={data} className='!text-[#1F1A3D]' />
        </div>
        <div className={styles.footer}>
          {text?.bottom && (
            <NATextHeading subheading={text?.bottom} />
          )}
          {button?.url && (
            <div className='text-center pt-20'>
              <a href={button.url} rel='noreferrer' className='btn'>{button.text}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}