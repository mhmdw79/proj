import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import Newspage from "./components/news/Newspage"
 const App = () => {

  const client = new ApolloClient({
    uri:"https://eu-west-2.cdn.hygraph.com/content/clzmyjjlk004h07v14ffnnkkf/master",
    cache:new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      
        <Routes>
          <Route path="/*" element={<HomePage/>} />
          <Route path="/:slug" element={<Newspage/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </ApolloProvider>
  )
}

export default App
