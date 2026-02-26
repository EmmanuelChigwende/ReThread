import React from 'react'
import {Routes,Route} from 'react-router-dom'

// all routes
import Signup from '../src/pages/Signup'
import Signin from './pages/Signin'

const App = () => {
  return (
    <div className='h-[100vh] w-[100vw] p-2 bg-background font-sans'>
      <Routes>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Signin' element={<Signin/>} />

        {/* Protected Routes */}
      </Routes>
    </div>
  )
}

export default App
