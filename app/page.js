import Carousel from '@/components/Carosuel'
import Categorypage from '@/components/Categorypage'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className=" dark:bg-white p-4">
        <Carousel />
      </div>
      <div className=" dark:bg-white p-4">
        {' '}
        <h1 className="dark:bg-white mb-5 text-3xl font-extrabold text-center sm:text-left">
          Best Sellers
        </h1>
        <Carousel />
      </div>

      <Categorypage />
    </>
  )
}
