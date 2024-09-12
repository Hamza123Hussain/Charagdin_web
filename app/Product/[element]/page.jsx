'use client'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import { fetchProductById } from '@/functions/CRUD/Product/GetSingleProduct'
import Loader from '@/components/Loader'

const Product = ({ params }) => {
  const [Data, setData] = useState({})
  const [loading, setloading] = useState(false)
  const GetProduct = async () => {
    setloading(true)
    const ITEM = await fetchProductById(params.element)
    if (ITEM) {
      setData(ITEM)
      setloading(false)
    } else {
      setloading(false)
    }
  }
  useEffect(() => {
    GetProduct()
  }, [])
  if (loading) {
    return <Loader />
  }
  return (
    <div className=" flex bg-white ">
      <Card className="hover:shadow-lg transition-shadow duration-300 rounded-lg mx-auto my-10">
        <img src={Data.ImageUrl} className=" h-96 w-96" />

        <div className=" my-3 px-2 ">
          <h6>{Data.Name}</h6>
        </div>
        <div className="flex items-center justify-center gap-2 w-full  cursor-pointer">
          {' '}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
            alt=""
            width={50}
          />{' '}
          <h1 className="text-lg font-extrabold ">Call For Price</h1>
        </div>
      </Card>
    </div>
  )
}

export default Product
