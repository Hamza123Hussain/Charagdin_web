import BestSellers from '@/components/BestSellers'
import Carousel from '@/components/Carosuel'
import Categorypage from '@/components/Categorypage'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Carousel />
      <BestSellers />
      <Categorypage />
    </>
  )
}
