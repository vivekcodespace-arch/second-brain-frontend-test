// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/SignIn'
import SignUp from './pages/SignUp'

// import Card from './components/ui/Card'



const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='SignIn' element={<Signin/>} />
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
      {/* <Card/> */}
    </div>
  )
}

export default App
