import Image from '@components/atoms/Image';
import React from 'react';
import styles from './AppSection.module.scss';

export default function AppSection() {

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
      <div className={styles.wrap}>
        <h2 className={styles.heading}>Watch the Pretzel app do its thing</h2>
        <div className={styles.imgWrap}>
          <Animation>
            <Image src='pret_app1' alt='app image' />
          </Animation>
        </div>
      </div>
    </div>
  )
}