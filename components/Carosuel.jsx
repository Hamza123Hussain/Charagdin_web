'use client'
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination, Autoplay])

const images = [
  {
    src: '/1.jpg',
    text: 'The Flow Desk',
    ID: '839177ce-ac54-4afb-94c5-d078e44ebb7b',
  },
  {
    src: '/2.jpg',
    text: 'Ellipse Elite',
    ID: 'f35cd38e-1b91-4f05-9653-3058baebdaf6',
  },
  {
    src: '/3.jpg',
    text: 'The Skyline Executive',
    ID: 'b333d0bb-786f-4b03-8bcc-2fcdc2a983b8',
  },
  {
    src: '/5.jpg',
    text: 'The Monochrome Muse',
    ID: '3fbb6be4-1644-4ad5-a6d8-d9fd5ea6feaa',
  },
  {
    src: '/6.jpg',
    text: 'Spia',
    ID: '055475c6-7552-4f35-b47a-4c37bc9bd867',
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
      // breakpoints: {
      //   1920: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //   },
      //   1028: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //   },
      //   990: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //   },
      // },
    })
  }, [])

  return (
    <>
      <div className="w-full relative mt-5">
        <div className="swiper centered-slide-carousel swiper-container relative">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className="   flex flex-col justify-center items-center">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-t-lg h-96 w-[50vw]  hover:border-black hover:shadow-md border-2 hover:shadow-blue-100  rounded-lg "
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
    </>
  )
}

export default SwiperCarousel
