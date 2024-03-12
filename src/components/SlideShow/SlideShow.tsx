import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './SlideShow.module.scss'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

interface Props {
  className?: string
  imageUrls?: string[]
}

const SlideShow = (props: Props) => {
  const { className, imageUrls } = props
  return (
    <>
      <Swiper
        wrapperClass={className}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageUrls ? (
          imageUrls.map((imageUrl, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={imageUrl} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            )
          })
        ) : (
          <></>
        )}
      </Swiper>
    </>
  )
}

export default SlideShow
