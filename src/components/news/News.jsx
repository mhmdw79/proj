import React from 'react'
import { GET_POSTS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import Cardel from '../Cardel';
const News = () => {
    const { loading, data, errors } = useQuery(GET_POSTS);

  if (loading) return <h4>کمی صبر کنید...</h4>;
  if (errors) return <h4> errors...</h4>;
  return (
    <div className="w-10/12  my-28 mx-auto">
    <Grid container spacing={3}>
      {data?.posts.map((post) => (
        <Grid xs={12} sm={6} md={4} mt={2} item key={post.id}>
          <Cardel {...post}/>
        </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default News