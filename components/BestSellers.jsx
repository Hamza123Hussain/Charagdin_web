import React from 'react'
import BlogCard from './ProductCard'

const BestSellers = () => {
  return (
    <div className=" p-2 mt-5">
      <h1 className=" font-extrabold sm:px-5 text-2xl sm:text-4xl text-center sm:text-left">
        Best Sellers
      </h1>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-4 mx-auto justify-center items-center gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default BestSellers
