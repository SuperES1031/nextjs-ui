import Background from '@components/atoms/Background'
import Image from '@components/atoms/Image'
import cn from 'classnames'
import React from 'react';
import styles from './HomeGraphic.module.scss'

export default function HomeGraphic({ graphic, className }) {

  function Animation({ children }) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);

    return (
      <div
        className={`left-to-right ${isVisible ? 'animation' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <Background image='graphic_left' className='left-0 top-[200px]' alt='background left' />
      <Background image='graphic_right' className='right-0 top-[30%]' alt='background right' />
      <div className={cn(styles.wrap, className)}>
        <Animation >
          <Image src={graphic} alt='home graphic' />
        </Animation>
      </div>
    </div>
  )
}