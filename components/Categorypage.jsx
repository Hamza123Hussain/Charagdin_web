'use client'
import React, { useEffect, useState } from 'react'
import CategoryCard from './Category'
import { fetchCatogories } from '@/functions/CRUD/Catorgories/Fetch'
import Loader from './Loader'

const Categorypage = () => {
  const [Category, SetCategory] = useState([])
  const [loading, Setloading] = useState(false)
  useEffect(() => {
    const GetCatogory = async () => {
      Setloading(true)
      const Data = await fetchCatogories('hamza@gmail.com')
      if (Data) {
        SetCategory(Data)
        Setloading(false)
      }
    }
    GetCatogory()
  }, [])
  if (loading) return <Loader />
  return (
    <div className=" p-4 dark:bg-white dark:text-black ">
      <h1 className=" font-extrabold text-2xl sm:text-4xl text-center sm:text-left sm:px-5">
        Product Categories
      </h1>
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-3   justify-center items-center gap-5">
        {Category.map((element, index) => {
          return (
            <div key={element.ID}>
              <CategoryCard element={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categorypage
