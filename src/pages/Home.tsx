// import React from 'react'

import Button from '../components/ui/Button'
const Home = () => {
  return (
    <div className='flex flex-col '>
      {/* Left div */}
      <div>
        <Button variant='primary' size='sm' text='hello' onClick={()=>{console.log("hellow hter")}}/>
      </div>
      {/* Right div */}
      <div>

      </div>
    </div>
  )
}

export default Home
