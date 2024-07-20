import React from 'react'
import BlogCard from './ProductCard'
import CategoryCard from './Category'

const Categorypage = () => {
  return (
    <div className=" p-4 ">
      <h1 className=" font-extrabold text-2xl sm:text-4xl text-center sm:text-left sm:px-5">
        Product Categories
      </h1>
      <div className=" p-4 grid grid-cols-1  justify-center items-center gap-5">
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
