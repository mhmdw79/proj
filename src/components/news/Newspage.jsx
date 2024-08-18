import { GET_POST } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comment';

const Newspage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(GET_POST, {
      variables: { slug },
    });
      
    console.log(data)
    if (loading) return <h3>لطفا صبر کنید</h3>;
  
    if (errors) return <h3>Error...</h3>;
    console.log(data)
  return (
   
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}  mt={9} display="flex" justifyContent="right" >
          <h2 className='font-YekanBakhHeavy text-2xl text-blue-700'>{data.post.title}</h2>
        </Grid>
        <Grid item display="flex" justifyContent="left">
        <Link to="/" className='text-red-600 font-YekanBakhBold'>بازگشت به صفحه اصلی</Link>

        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverphoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={5} mb={5} display="flex"  justifyContent="right">
         <p className='font-iranyekanwebregular text-lg'>{data.post.content}</p>
        </Grid>
        <Link to="/" className='text-red-600 font-YekanBakhBold'>بازگشت به صفحه اصلی</Link>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
        
      </Grid>
    </Container>
   
  )
}

export default Newspage