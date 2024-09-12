import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const SingleProduct = ({ element }) => {
  return (
    <div className=" flex ">
      <Card className="hover:shadow-lg transition-shadow duration-300 rounded-t-xl mx-auto">
        <img src={element.ImageUrl} className=" h-96 w-96" />

        <div className=" my-3 px-2 ">
          <h6>{element.Name}</h6>
        </div>
        <div className="flex items-center justify-center gap-2 w-full ">
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

export default SingleProduct
