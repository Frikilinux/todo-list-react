import React from 'react'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'
import ToDo from '../pages/ToDo'
import PokeApi from '../pages/PokeApi'
import NotFound404 from '../pages/NotFound404'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/pokeapi' element={<PokeApi />} />
          <Route path='*' element={<NotFound404 />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
