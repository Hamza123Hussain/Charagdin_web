import React from 'react'
import Card from '@mui/material/Card'

const SingleProduct = ({ element }) => {
  return (
    <div className=" flex ">
      <Card className="hover:shadow-lg transition-shadow duration-300 rounded-t-xl mx-auto">
        <img src={element.ImageUrl} className=" h-96 w-96" />

        <div className=" my-3 px-2 ">
          <h6>{element.Name}</h6>
        </div>
        <div className="flex items-center justify-center gap-2 w-full cursor-pointer ">
          <a
            href="https://wa.me/+92 314 4058071" // Replace with your WhatsApp number
            className="fixed bottom-10 right-2  shadow-green-400  bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-green-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
              alt=""
              width={50}
            />{' '}
          </a>
          <h1 className="text-lg font-extrabold ">Call For Price</h1>
        </div>
      </Card>
    </div>
  )
}

export default SingleProduct
