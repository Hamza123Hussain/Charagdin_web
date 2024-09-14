'use client'
import React, { useEffect, useState } from 'react'
import CategoryCard from './Category'
import { fetchCatogories } from '@/functions/CRUD/Catorgories/Fetch'
import Loader from './Loader'
import { useRouter } from 'next/navigation'
import Loader2 from './Loader2'
const Categorypage = () => {
  const [Category, SetCategory] = useState([])
  const Router = useRouter()
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
  if (loading) return <Loader2 />
  return (
    <div className=" p-6  bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 p-4">
        {Category.map((element) => {
          return (
            <div
              className=" cursor-pointer"
              onClick={() => Router.push(`/Products/${element.Name}`)}
              key={element.ID}
            >
              <CategoryCard element={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Categorypage
