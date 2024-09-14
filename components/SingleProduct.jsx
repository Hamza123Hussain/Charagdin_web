import React from 'react'
import Card from '@mui/material/Card'

const SingleProduct = ({ element }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 rounded-t-xl mx-auto">
      <img src={element.ImageUrl} className="h-96 w-72   sm:w-96" />

      <div className=" my-3 px-2 text-sm font-extrabold ">
        <h6>{element.Name}</h6>
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
  )
}

export default SingleProduct
