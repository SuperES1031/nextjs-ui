import React from 'react';
import styles from './TextHeading.module.scss'

export default function TextHeading({ heading, heading1, heading2, subheading, text }) {

  function FadeInSection({ children }) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting))
      })
      observer.observe(domRef.current)
    }, [])

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      {heading && (
        <FadeInSection >
          <h2 className={styles.heading}>
            <span>{heading}</span>
            {heading1 && (
              <span className='text-[#EE2E64]'>{' '} {heading1}</span>
            )}
            {heading2 && (
              <span>{' '}{heading2}</span>
            )}
          </h2>
        </FadeInSection>
      )}

      {subheading && (
        <FadeInSection >
          <p className={styles.subheading}>{subheading}</p>
        </FadeInSection>
      )}

      {text && (
        <FadeInSection>
          <p className={styles.text}>{text}</p>
        </FadeInSection>
      )}
    </div>
  )
}