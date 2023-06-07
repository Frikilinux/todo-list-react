import React from 'react'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import Todo from '../pages/todo/Todo'
import PokeApi from '../pages/PokeApi'
import NotFound404 from '../pages/404/NotFound404'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/pokeapi' element={<PokeApi />} />
          <Route path='*' element={<NotFound404 />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
