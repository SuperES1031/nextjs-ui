import CarouselCard from '@components/atoms/CarouselCard';
import styles from './Carousel.module.scss'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cn from 'classnames';

export default function Carousel(props) {
  const testimonials = props.testimonial

  var settings = {
    className: "custom",
    dots: false,
    infinite: true,
    slidesToShow: 2,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <CarouselCard testimonial={testimonial} key={index} />
        ))}
      </Slider>
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={cn(className, styles.next)}
      onClick={onClick}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0565 7.1991L6.84154 1.9841L8.21627 0.609376L15.7782 8.17132L8.21626 15.7333L6.84154 14.3585L12.0565 9.14354L0.222655 9.14354L0.222655 7.1991L12.0565 7.1991Z" fill="#EA2667" />
      </svg>

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={cn(className, styles.prev)}
      onClick={onClick}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.94443 8.8009L9.15943 14.0159L7.78471 15.3906L0.222768 7.82868L7.78471 0.266735L9.15944 1.64146L3.94443 6.85646L15.7783 6.85646L15.7783 8.8009L3.94443 8.8009Z" fill="#EA2667" />
      </svg>
    </div>
  );
}