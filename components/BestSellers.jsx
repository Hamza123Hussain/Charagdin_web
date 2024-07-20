import React from 'react'
import BlogCard from './ProductCard'

const BestSellers = () => {
  return (
    <div className=" p-2">
      <h1 className=" font-extrabold text-4xl text-center sm:text-left">
        Best Sellers
      </h1>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-4 mx-auto justify-center items-center gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default BestSellers
