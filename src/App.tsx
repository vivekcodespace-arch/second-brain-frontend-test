// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

// import Card from './components/ui/Card'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {/* <Card/> */}
    </div>
  )
}

export default App
