import React from 'react'
import Table from '../components/Table'
import SideBar from '../components/Sidebar/SideBar'

const History = () => {
  return (
    <div className='flex flex-wrap justify-between overflow-hidden max-h-[100vh]'> 
            <div className="w-1/12">
                <SideBar></SideBar>
            </div>
            <div className="w-11/12">
            <Table></Table>
            </div>
        </div>
    
  )
}

export default History