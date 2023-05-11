import React from 'react'
import SideBar from '../components/Sidebar/SideBar'
import ChatMessageBox from '../components/ChatMessageBox'

const HomeChatPage = () => {
  return (<>
        <div className='flex flex-wrap justify-between overflow-hidden max-h-[100vh]'> 
            <div className="w-1/12">
                <SideBar></SideBar>
            </div>
            <div className="w-11/12">
                <ChatMessageBox></ChatMessageBox>
            </div>
        </div>
  </>
  )
}

export default HomeChatPage