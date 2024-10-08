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
        <img src={Data.ImageUrl} className=" sm:h-96 sm:w-96 h-60 w-60" />

        <div className=" my-3 px-2 font-extrabold ">
          <h6>{Data.Name}</h6>
        </div>

        <a
          href="https://wa.me/03144058071" // Replace with your WhatsApp number
          className=" h-6 gap-2 w-52 mx-auto  cursor-pointer mb-4 px-1 shadow-green-400 text-black    rounded-full flex items-center justify-center  shadow-sm  hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
            alt=""
            width={20}
          />{' '}
          <h1 className="text-xs font-extrabold ">Call For Price</h1>
        </a>
      </Card>
    </div>
  )
}

export default Product
