'use client'
import { useState, useEffect } from 'react'

const images = [
  'https://media.licdn.com/dms/image/C5122AQEG7VFxITsdAw/feedshare-shrink_2048_1536/0/1579410473953?e=2147483647&v=beta&t=d1VYD1ikLAP2hyg73drE1Lja5xAelJcRdB25ui-x5KE',
  'https://media.licdn.com/dms/image/D4D22AQGIQ1HI_UJ-FA/feedshare-shrink_2048_1536/0/1716219636662?e=2147483647&v=beta&t=QH057TIV9bSx8Qg6ZY-RmcmkMrXSrB-sQbsvoXVhyEA',
  'https://media.licdn.com/dms/image/C5122AQHeWNvnxIylvw/feedshare-shrink_800/0/1581741230372?e=2147483647&v=beta&t=vBa1hoXfpmgobJwFtbV-mWhA_uJlsS126r8ZL7GPCZo',
  'https://media.licdn.com/dms/image/C5122AQHvCqnhtakyOA/feedshare-shrink_2048_1536/0/1576053369016?e=2147483647&v=beta&t=7uE4QGhBszH7qOYwNB5-yMe3J5-AjifStOmwb8GCu5Y',
  'https://media.licdn.com/dms/image/C5122AQGFXKvUbs0I5g/feedshare-shrink_2048_1536/0/1577409133771?e=2147483647&v=beta&t=eWMs8824T6BGFWbLOT-U7MPeJjorGCvVWEK4CckR9hg',
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    )
  }

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
  }

  return (
    <div
      id="default-carousel"
      className="relative w-full border-b-2 border-slate-200  "
      data-carousel="slide"
    >
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg    my-5">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full sm:object-contain object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-0 py-2  z-10 flex -translate-x-1/2  left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-black' : 'bg-gray-200'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
