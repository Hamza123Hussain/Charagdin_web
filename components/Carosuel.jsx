'use client'
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination, Autoplay])

const images = [
  {
    src: 'https://media.licdn.com/dms/image/D4E22AQHdCY49NizGhg/feedshare-shrink_800/0/1692537273395?e=2147483647&v=beta&t=pgGRSnucGMklifrrAoO0dTgmwrXRjOlyUM63u_P8MsQ',
    text: 'Nature Image 1',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4D22AQFn4Yj-VcpHtw/feedshare-shrink_800/0/1716219577943?e=2147483647&v=beta&t=vbA66Hkpusa41wE_cFOlp4ueY8YsafihYfxsKxMrxQs',
    text: 'Nature Image 2',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4D22AQGIQ1HI_UJ-FA/feedshare-shrink_2048_1536/0/1716219636662?e=2147483647&v=beta&t=QH057TIV9bSx8Qg6ZY-RmcmkMrXSrB-sQbsvoXVhyEA',
    text: 'Nature Image 3',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4E22AQETIcxG1RQB7A/feedshare-shrink_800/0/1693752721388?e=2147483647&v=beta&t=ErdW_-RgqPzLkQBvMkinao_2hP0_8K9PDLFhVKUr-rw',
    text: 'Nature Image 4',
  },
  {
    src: 'https://i.dawn.com/primary/2015/11/563a4ae51fd77.jpg',
    text: 'Nature Image 5',
  },
  {
    src: 'https://media.licdn.com/dms/image/D4D22AQGGRnKakZTdzg/feedshare-shrink_800/0/1716219507393?e=2147483647&v=beta&t=MXJkejNbRUDwHevyHhTEAghxZmpV4DBGVf2IARjwJH4',
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
      <div className="w-full relative mt-5">
        <div className="swiper centered-slide-carousel swiper-container relative">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className=" h-[70vh] sm:h-[100vh] sm:w-[40vw] w-[100vw]  rounded-lg  flex flex-col justify-center items-center border-2">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-t-lg w-full h-[90vh] "
                  />
                  <span className="text-3xl mt-5 p-4  text-center font-semibold text-indigo-600">
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
