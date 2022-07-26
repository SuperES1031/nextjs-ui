import styles from './AppSection.module.scss';

export default function AppSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>Watch the Pretzel app do its thing</h2>
        <div className={styles.imgWrap}>
        </div>
      </div>
    </section>
  )
}