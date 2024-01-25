// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import './Slide.css'

interface slideProps {
  images: string[]
}

const Slide = (props: slideProps) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {props.images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slide
