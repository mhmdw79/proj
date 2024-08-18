import React from "react";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (errors) return <h3>Error...</h3>;

  return (
    <div className="hidden md:block">
 <Grid
      mt={5}
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data?.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <p className="font-iranyekanwebregular text-gray-400 text-xs">{author.name}</p>
            </Link>
          </Grid>
          {index !== data?.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
    </div>
   
  );
}

export default Authors;
