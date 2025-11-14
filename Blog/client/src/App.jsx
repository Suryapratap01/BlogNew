import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      {/* <h1>My Blog</h1> */}
    </div>
  )
}

export default App
