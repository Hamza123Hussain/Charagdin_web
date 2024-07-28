import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const SingleProduct = () => {
  return (
    <div className=" flex ">
      <Card
        sx={{ maxWidth: 345, boxShadow: 3 }}
        className="hover:shadow-lg transition-shadow duration-300"
      >
        <CardMedia
          component="img"
          height="200"
          image="https://www.renome.pk/wp-content/uploads/2022/03/Cozy-Sofa-21500-38000-54500-1.jpg"
          title="Cozy Sofa"
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cozy Sofa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Experience ultimate comfort with our Cozy Sofa. Its plush cushions
            and elegant design make it the perfect addition to any living room.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">
            PRICE Rs 200
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SingleProduct
