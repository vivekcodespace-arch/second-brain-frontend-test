// import React from 'react'

import Button from '../components/ui/Button'
import { PlusIcons } from '../icons/PlusIcons'

const Home = () => {
  return (
    <div className='flex flex-col '>
      {/* Left div */}
      <div>

        <Button variant='primary' size='sm' text='Share' onClick={()=>{console.log("hellow hter")}} startIcon={<PlusIcons size='md'/>}/>
        <Button variant='secondary' size='sm' text='Add Content' onClick={()=>{console.log("hellow hter")}}/>
      </div>
      {/* Right div */}
      <div>
      
      </div>
    </div>
  )
}

export default Home
