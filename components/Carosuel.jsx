'use client'
import { useRouter } from 'next/navigation'
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
  const Router = useRouter()
  return (
    <>
      <div className="w-full relative mt-5">
        <div className="swiper centered-slide-carousel swiper-container relative">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div
                  onClick={() =>
                    Router.push(`/Product/${image.ID}
                  `)
                  }
                  className="   flex flex-col justify-center items-center cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-t-lg sm:h-96 h-60 w-96  hover:border-black hover:shadow-md border-2 hover:shadow-blue-100  rounded-lg "
                  />
                  <span className="text-2xl sm:text-3xl mt-5 p-4  text-center font-semibold text-green-600">
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
