import Background from '@components/atoms/Background'
import Image from '@components/atoms/Image'
import React from 'react'
import styles from './CarGraphic.module.scss'

export default function CarGraphic() {

  function Animation({ children }) {
    const [isVisible, setVisible] = React.useState()
    const domRef = React.useRef()

    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => setVisible(entry.isIntersecting))
      })
      observer.observe(domRef.current)
    }, [])

    return (
      <div
        className={`car-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <Background image='graphic_left' className='left-0 top-[200px]' alt='background left' />
      <Background image='graphic_right' className='right-0 top-[30%]' alt='background right' />
      <div className={styles.wrap}>
        <Animation>
          <Image src='car_graphic' alt='car graphic' />
        </Animation>
      </div>
    </div>
  )
}