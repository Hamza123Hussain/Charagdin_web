'use client'
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination, Autoplay])

const images = [
  {
    src: 'https://www.hindustantimes.com/web-stories/hania-aamirs-note-worthy-ethnic-looks-_NIQlE3VcFMqP0zB05EX/assets/19.jpeg',
    text: 'Nature Image 1',
  },
  {
    src: 'https://jang.com.pk/assets/uploads/updates/2022-08-20/7870_9481837_Hania-Amir_updates.jpg',
    text: 'Nature Image 2',
  },
  {
    src: 'https://humenglish.com/wp-content/uploads/2024/05/hania-aamir-age-smk-mojo-222-Sadaan.jpg',
    text: 'Nature Image 3',
  },
  {
    src: 'https://i.pinimg.com/736x/c5/4b/53/c54b53e6a18065b84d98fe2f65f05c08.jpg',
    text: 'Nature Image 4',
  },
  {
    src: 'https://img.mensxp.com/media/content/2023/Apr/hania-amir-health-15_642e89423fa1f.jpeg',
    text: 'Nature Image 5',
  },
  {
    src: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/12/3-47.png?impolicy=Medium_Widthonly&w=400&h=711',
    text: 'Nature Image 6',
  },
]

const SwiperCarousel = () => {
  useEffect(() => {
    const swiper = new Swiper('.centered-slide-carousel', {
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: '.centered-slide-carousel .swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    })
  }, [])

  return (
    <>
      <div className="w-full relative">
        <div className="swiper centered-slide-carousel swiper-container relative">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className=" rounded-2xl  flex flex-col justify-center items-center">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-2xl sm:w-[90vw] w-[100vw] h-[50vh] sm:h-[100vh]"
                  />
                  <span className="text-3xl mn-5 font-semibold text-indigo-600">
                    {image.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <style jsx>{`
        .swiper-wrapper {
          width: 100%;
          height: max-content !important;
          padding-bottom: 64px !important;
          -webkit-transition-timing-function: linear !important;
          transition-timing-function: linear !important;
          position: relative;
        }
        .swiper-pagination-bullet {
          background: #4f46e5;
        }
        .swiper-pagination-bullet-active {
          background: #4f46e5 !important;
        }
      `}</style>
    </>
  )
}

export default SwiperCarousel
