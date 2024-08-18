import {gql} from "@apollo/client"

const GET_POSTS = gql`
query{
 posts {
    title
    content
    id
    slug
    coverphoto {
      url
    }
  }
}

`

const GET_POST = gql`
  query getPost($slug: String!) {
      post(where: {slug: $slug}) {
    content
    coverphoto {
      url
    }
    id
    slug
    title
  }
  }
`
const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

const GET_AUTHORS_INFO = gql`
query{
  authors {
    id
    name
    avatar {
      url
    }
  }
  }
`;
export {GET_POSTS,GET_POST,GET_POST_COMMENTS,GET_AUTHORS_INFO}