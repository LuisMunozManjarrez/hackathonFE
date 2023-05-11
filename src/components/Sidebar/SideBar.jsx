import React from 'react'
import IconBox from '../IconBox'
import '@cision/atlas-components'
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (<>
    <div className='flex flex-col gap-5 w-auto h-[100vh] bg-[#f7f7f7] pt-10 justify-start'>
      <div className="h-auto">
      <atlas-logo></atlas-logo>
      </div> 
      <div className="flex flex-col gap-5">
        <Link to="/" className="flex justify-center">
          <button className="cursor-pointer" onClick={() => console.log('home')}>
            <atlas-icon name="home" />
          </button>
        </Link>
        <Link to="/chat/new" className="flex justify-center">
          <button className="cursor-pointer" onClick={() => console.log('home')}>
            <atlas-icon name="chat" />
          </button>
        </Link>
        <Link to="/history" className="flex justify-center">
          <button className="cursor-pointer" onClick={() => console.log('home')}>
            <atlas-icon name="bookOpen" />
          </button>
        </Link>
        <Link to="/watchlist" className="flex justify-center">
          <button className="cursor-pointer" onClick={() => console.log('home')}>
            <atlas-icon name="nodeTree" />
          </button>
        </Link>
      </div>
    </div>
  </>
  )
}

export default SideBar