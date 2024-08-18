import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Cardel = ({title,slug,coverphoto}) => {
  return (
    
        <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px ",borderRadius:4}}>
        <CardMedia component="img" height="194px" image={coverphoto.url} alt={slug}/>
        <CardContent><h3 className='font-iranyekanwebregular'>{title}</h3></CardContent>
        <Divider variant='middle' sx={{margin:"10px"}}/>
        <CardActions>
            <Link to={`/${slug}`} style={{textDecoration:"none",width:"100%"}}>
           <Button variant='outlined' size='small' sx={{width:"100%", borderRadius:3}}>خبر کامل</Button>

            </Link>
        </CardActions>
        
    </Card> 
    
   
  )
}

export default Cardel