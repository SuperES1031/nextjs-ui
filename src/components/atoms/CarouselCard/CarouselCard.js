
import styles from './CarouselCard.module.scss'

export default function CarouselCard(props) {
  const testimonial = props.testimonial
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>
        {testimonial.text}
      </p>
      <p className={styles.name}>
        - {testimonial.name}
      </p>
      
      <svg width="147" height="22" viewBox="0 0 147 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.413 17.76L4.36 21.708L5.935 13.78L0 8.292L8.027 7.34L11.413 0L14.799 7.34L22.826 8.292L16.891 13.78L18.466 21.708L11.413 17.76Z" fill="#F4BF00" />
        <path d="M42.413 17.76L35.36 21.708L36.935 13.78L31 8.292L39.027 7.34L42.413 0L45.799 7.34L53.826 8.292L47.891 13.78L49.466 21.708L42.413 17.76Z" fill="#F4BF00" />
        <path d="M104.413 17.76L97.36 21.708L98.935 13.78L93 8.292L101.027 7.34L104.413 0L107.799 7.34L115.826 8.292L109.891 13.78L111.466 21.708L104.413 17.76Z" fill="#F4BF00" />
        <path d="M73.413 17.76L66.36 21.708L67.935 13.78L62 8.292L70.027 7.34L73.413 0L76.799 7.34L84.826 8.292L78.891 13.78L80.466 21.708L73.413 17.76Z" fill="#F4BF00" />
        <path d="M135.413 17.76L128.36 21.708L129.935 13.78L124 8.292L132.027 7.34L135.413 0L138.799 7.34L146.826 8.292L140.891 13.78L142.466 21.708L135.413 17.76Z" fill="#F4BF00" />
      </svg>
    </div>
  )
}