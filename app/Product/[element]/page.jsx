import React from 'react'
import Card from '@mui/material/Card'

const ProductCard = ({ params }) => {
  return (
    <div className=" flex ">
      <Card className="hover:shadow-lg transition-shadow duration-300 rounded-t-xl mx-auto">
        <img src={params.element.ImageUrl} className=" h-96 w-96" />

        <div className=" my-3 px-2 ">
          <h6>{params.element.Name}</h6>
        </div>
        <div className="flex items-center justify-center gap-2 w-full ">
          {' '}
          <a
            href="https://wa.me/0314 4058071" // Replace with your WhatsApp number
            className="fixed bottom-10 right-2  shadow-green-400  bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-green-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" // Ensure this image is in your public directory
              alt="WhatsApp"
              className="w-16 sm:w-12 p-1 "
            />
          </a>
          <h1 className="text-lg font-extrabold ">Call For Price</h1>
        </div>
      </Card>
    </div>
  )
}

export default ProductCard
