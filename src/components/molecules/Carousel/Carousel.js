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
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={cn(className, styles.prev)}
      onClick={onClick}
    />
  );
}