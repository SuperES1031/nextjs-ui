import styles from './CompareChart.module.scss'

export default function CompareChart() {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>
        Competitor comparison chart
      </p>
      <div>
        <ul className={styles.title}>
          <li>Item</li>
          <li className='m-auto'>Pretzel</li>
          <li className='m-auto'>Competitor 1</li>
          <li className='m-auto'>Competitor 2</li>
        </ul>
        <ul>
          <li>
            Protects cars
          </li>
          <li className='m-auto'>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2727 2L9.27273 18L2 10.7273" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
          <li className='m-auto'>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2727 2L9.27273 18L2 10.7273" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
          <li className='m-auto'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L18 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 2L2 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </li>
        </ul>
        <ul>
          <li>Protects appliances</li>
          <li className='m-auto'>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2727 2L9.27273 18L2 10.7273" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
          <li className='m-auto'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L18 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 2L2 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </li>
          <li className='m-auto'>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2727 2L9.27273 18L2 10.7273" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
        </ul>
        <ul>
          <li>Works for you</li>
          <li className='m-auto'>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2727 2L9.27273 18L2 10.7273" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
          <li className='m-auto'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L18 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 2L2 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
          <li className='m-auto'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L18 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 2L2 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  )
}