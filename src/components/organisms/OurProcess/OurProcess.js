import React from 'react';
import styles from './OurProcess.module.scss'

export default function OurProcess() {
  const data = [
    {
      heading: "01",
      subheading: "Review",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "02",
      subheading: "Initial Interview",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "03",
      subheading: "Mini Project ",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "04",
      subheading: "Final Interview",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "05",
      subheading: "Offer",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      heading: "06",
      subheading: "Career Launch",
      text: "Lorem Ipsum is simply dummy text of the printing"
    },

  ]

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
        className={`fade-in ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h2>Our process</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyWrap}>
            <div className={styles.item}>
              <div className={styles.first}>
                <FadeInSection>
                  <p className={styles.title}>01</p>
                  <p className={styles.subtitle}>Review</p>
                  <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing</p>
                </FadeInSection>
              </div>
              <div className={styles.second}>
                <FadeInSection>
                  <p className={styles.title}>02</p>
                  <p className={styles.subtitle}>Review</p>
                  <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing</p>
                </FadeInSection>
                <div className={styles.child}></div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <FadeInSection>
                  <p className={styles.title}>03</p>
                  <p className={styles.subtitle}>Review</p>
                  <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing</p>
                </FadeInSection>
              </div>
              <div className={styles.second}>
                <FadeInSection>
                  <p className={styles.title}>04</p>
                  <p className={styles.subtitle}>Review</p>
                  <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing</p>
                </FadeInSection>
                <div className={styles.child}></div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <FadeInSection>
                  <p className={styles.title}>05</p>
                  <p className={styles.subtitle}>Review</p>
                  <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing</p>
                </FadeInSection>
              </div>
              <div className={styles.second}>
                <FadeInSection>
                  <p className={styles.title}>06</p>
                  <p className={styles.subtitle}>Review</p>
                  <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing</p>
                </FadeInSection>
                <div className={styles.child}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}