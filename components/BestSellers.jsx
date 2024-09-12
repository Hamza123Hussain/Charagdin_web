'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination, Autoplay])

const images = [
  {
    src: '/7.jpg',
    text: 'The Urban Workbench',
    ID: 'b3e132a6-f1f3-4c3b-a9c4-497317e505b2',
  },
  {
    src: '/9.jpg',
    text: 'Wood Ryder',
    ID: '13780511-f0da-4bc9-893a-b3c15410761b',
  },
  {
    src: '/10.jpg',
    text: 'Windsor Executive',
    ID: '468a2154-356c-45be-827b-838c43f13ebe',
  },
  {
    src: '/4.jpg',
    text: 'The Wood & Wonder Wall',
    ID: '66d4ee0d-8f33-4c0b-80dc-1e8e475b0194',
  },
  {
    src: '/8.jpg',
    text: 'Cream & Coffee',
    ID: 'a9c85cac-221d-4309-9d63-f899d259a0eb',
  },
]

const BestSellers = () => {
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
                    className="rounded-t-lg h-96 w-96  hover:border-black hover:shadow-md border-2 hover:shadow-blue-100  rounded-lg "
                  />
                  <span className="text-3xl mt-5 p-4  text-center font-semibold text-green-600">
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

export default BestSellers
