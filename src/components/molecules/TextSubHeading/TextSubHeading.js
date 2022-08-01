import styles from './TextSubHeading.module.scss'

export default function TextSubHeading(props) {
  const data = props.text

  return (
    <div className={styles.wrap}>
      <div className={styles.heading}>
        <h2>
          {data.subheading1 && (
            <span className='text-[#1F1A3D]'>
              {data.subheading1}
            </span>
          )} {' '}
          {data.subheading2 && (
            <span className='text-[#EE2E64]'>
              {data.subheading2}
            </span>
          )}
          {data.subheading3 && (
            <span className='text-[#1F1A3D]'>
              {data.subheading3}
            </span>
          )}
        </h2>
      </div>
      <div className={styles.body}>
        {data.text && (
          <p>{data.text}</p>
        )}
      </div>
    </div>
  )
}