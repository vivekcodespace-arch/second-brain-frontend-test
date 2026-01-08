// import React from 'react'

import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { PlusIcons } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'

const Home = () => {
  return (
    <div className=''>
      {/* Left div */}
      <div>

        <Button variant='primary' size='sm' text='Share' onClick={()=>{console.log("hellow hter")}} startIcon={<ShareIcon size='md'/>}/>

        <Button variant='secondary' size='sm' text='Add Content' onClick={()=>{console.log("hellow hter")}} startIcon={<PlusIcons size='md'/>}/>
      </div>
      {/* Right div */}
      <div>
      
      </div>

      <Card title='my-first-app' type='youtube' link='https://www.youtube.com/watch?v=vJQCAtzSfuo'/>

      <Card title='my-first-app' type='twitter' link='https://x.com/AndrewBolis/status/2008927900695674887'/>

    </div>
  )
}

export default Home
