import GridImage from '@components/molecules/GridImage'
import TextHeading from '@components/molecules/TextHeading'
import cn from 'classnames'
import styles from './Backed.module.scss'

export default function Backed({ classname }) {
  const text = {
    heading: "Backed by the best",
    subheading: "Pretzel has great extended protection plans, backed by top financial institutions like Allianz, AIG, and A+ financial. "
  }

  const data = [
    {
      image: "allianz"
    },
    {
      image: "aig"
    }
  ]

  return (
    <div className={classname}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <TextHeading
            heading={text.heading}
            subheading={text.subheading}
          />
        </div>
        <div className={styles.body}>
          <GridImage data={data} className={cn(classname, 'pointer-events-none')} />
        </div>
      </div>
    </div>
  )
}