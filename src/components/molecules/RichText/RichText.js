import React from 'react';
import styles from './RichText.module.scss'

export default function RichText({ heading, subheading, text }) {

  function FadeInSection(props) {
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
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div>
      <div className={styles.wrap}>
        {heading && (
          <FadeInSection>
            <h2 className={styles.heading}>{heading}</h2>
          </FadeInSection>
        )}

        {subheading && (
          <FadeInSection>
            <p className={styles.subheading}>{subheading}</p>
          </FadeInSection>
        )}

        {text && (
          <FadeInSection>
            <p className={styles.text}>{text}</p>
          </FadeInSection>
        )}
      </div>
    </div>
  )
}