// components/About.jsx

import Image from 'next/image'
import React from 'react'
import LOGO from '../../public/LOGO-removebg-preview.png'
import SwiperCarousel from '@/components/Carosuel'
const About = () => {
  return (
    <div className="p-2 sm:p-8 bg-gray-50">
      <div className=" flex gap-5 justify-center mb-10 items-center">
        {' '}
        <Image src={LOGO} width={200} height={200} alt="logo" />
        {/* <h1 className=" text-xl sm:text-4xl font-bold text-center">
          About Charag Din & Co
        </h1> */}
      </div>
      <div className="max-w-4xl mx-auto text-lg leading-relaxed">
        <p>
          Charag Din & Co is a renowned name in the furniture industry based in
          Lahore, Pakistan. The company has built a solid reputation over the
          years for its high-quality furniture products and exceptional customer
          service.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">History</h2>
        <p>
          Charag Din & Co was established to provide premium furniture solutions
          to the market. Since its inception, the company has grown
          significantly, becoming one of the leading furniture manufacturers and
          dealers in Pakistan. The company is located at 22-link McLeod Road,
          Lahore, Punjab, Pakistan.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Customer Base</h2>
        <p>
          Charag Din & Co has served a vast number of customers over the years,
          catering to both residential and commercial sectors. Their customer
          base includes individual homeowners, corporate offices, educational
          institutions, and more, reflecting the diverse range of furniture
          products they offer.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Product Range</h2>
        <p>
          The company specializes in a wide variety of furniture products,
          including office furniture, kitchen cabinets, accessories, and school
          furniture. They use high-quality materials such as wood, steel, and
          plastic to ensure durability and aesthetic appeal in their products.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Sustainability</h2>
        <p>
          Charag Din & Co is committed to sustainable practices by sourcing
          materials responsibly and employing eco-friendly manufacturing
          processes. This approach not only ensures high-quality products but
          also supports environmental conservation.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Recognition</h2>
        <p>
          The company is well-recognized in the industry, listed in various
          business directories and holding certifications for its quality
          standards. Charag Din & Co continues to uphold its reputation by
          consistently delivering top-notch furniture products and services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Philosophy</h2>
        <p>
          At the core of Charag Din & Co&apos;s philosophy is a commitment to
          excellence and customer satisfaction. They aim to provide innovative
          and functional furniture solutions that meet the evolving needs of
          their clients.
        </p>
        <p className="mt-6">
          Charag Din & Co continues to thrive by maintaining a focus on quality,
          sustainability, and customer service. Their dedication to these
          principles has made them a trusted name in the furniture industry in
          Pakistan.
        </p>
      </div>

      <h1>Our clients</h1>
      <SwiperCarousel />
    </div>
  )
}

export default About
