// import React from 'react'

import { use, useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { PlusIcons } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'
import { CreateComponentModal } from '../components/ui/CreateComponentModal'
import { SidebarItems } from '../components/ui/SideBaritem'
import { Twitter } from '../icons/Twiiter'
import { Youtube } from '../icons/Youtube'
import { HeroTitle } from '../components/ui/HeroTitle'
import { ShareBrainIcon } from '../icons/ShareBrain'
import { useContent } from '../hooks/useContent'

const Home = () => {
  const [showAddcontent, setShowAddcontent] = useState(false);
  const contents = useContent();

  return (
    <div className="w-full h-full flex ">
      <div className='sidebar w-[25%] flex flex-col tems-center p-2'>
        <HeroTitle icon={<ShareBrainIcon/>} text='Share Brain'/>
        <SidebarItems icon={<Twitter/>} text='Twitter'/>
        <SidebarItems icon={<Youtube/>} text='Youtube'/>
      </div>

      <div className='w-full bg-slate-100 p-4'>
        <div className='flex justify-end gap-3 p-2'>

          <Button variant='secondary' size='sm' text='Add Content' onClick={() => { setShowAddcontent(true) }} startIcon={<PlusIcons size='md' />} />

          <Button variant='primary' size='sm' text='Share' onClick={() => { console.log("hellow hter") }} startIcon={<ShareIcon size='md' />} />

        </div>

        <div className='flex flex-wrap gap-2'>
          {contents.map(({type, title, link}) => (
            <div>
              <Card title={title} type={type} link={link} />
            </div>
          ))}
        </div>
      </div>

      {showAddcontent && <CreateComponentModal open={showAddcontent} onClose={() => setShowAddcontent(false)} />}
    </div>
  )
}

export default Home
