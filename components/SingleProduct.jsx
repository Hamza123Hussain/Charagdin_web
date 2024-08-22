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
      <Card
        sx={{ maxWidth: 345, boxShadow: 3 }}
        className="hover:shadow-lg transition-shadow duration-300 rounded-t-xl mx-auto"
      >
        <CardMedia
          component="img"
          height="200"
          image={element.ImageUrl}
          title="Cozy Sofa"
          style={{ objectFit: 'cover' }}
        />

        <div className=" my-3 pl-4">
          <Typography gutterBottom variant="h5" component="div">
            {element.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Experience ultimate comfort with our Cozy Sofa. Its plush cushions
            and elegant design make it the perfect addition to any living room.
          </Typography>
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
