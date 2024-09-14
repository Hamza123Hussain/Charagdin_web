'use client'
import Loader from '@/components/Loader'
import SingleProduct from '@/components/SingleProduct'
import { fetchProductsByCategory } from '@/functions/CRUD/Product/GettingProductOfCataGory'
import * as React from 'react'
import { useState } from 'react'

export default function MediaCard({ params }) {
  const [ProductData, SetData] = useState([])
  const [Loading, SetLoading] = useState(false)
  console.log(params.Name)
  React.useEffect(() => {
    const GetProducts = async () => {
      SetLoading(true)
      const Data = await fetchProductsByCategory(params.Name)
      if (Data) {
        SetData(Data)
        SetLoading(false)
      }
    }
    GetProducts()
  }, [])
  if (Loading) {
    return <Loader />
  }
  return (
    <div className=" p-10 bg-white">
      {' '}
      <h1 className=" text-center mb-16 text-3xl sm:text-7xl md:text-7xl  text-black font-extrabold">
        {decodeURIComponent(params.Name)}
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3   mx-auto gap-16 my-3">
        {ProductData.map((element, index) => {
          return <SingleProduct element={element} key={index} />
        })}
      </div>
    </div>
  )
}
