import React from 'react'
import BlogCard from './ProductCard'
import CategoryCard from './Category'

const Categorypage = () => {
  return (
    <div className=" p-2 mt-5">
      <h1 className=" font-extrabold text-2xl sm:text-4xl text-center sm:text-left sm:px-5">
        Product Categories
      </h1>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-4 mx-auto justify-center items-center gap-5">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard /> <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  )
}

export default Categorypage
