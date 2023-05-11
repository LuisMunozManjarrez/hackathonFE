import React from 'react'
import Table from '../components/Table'
import Card from '../components/Card'
import '@cision/atlas-components'


function createData(description, btnName) {
  return { description, btnName};
}

const rows = [
  createData('What was the highlight of your day today? ', 'START CHAT'),
  createData('Track your favorite companies and indexes. Follow news related to your watchlist', 'LOOK UP'),
  createData('Browsing your conversation history or by searching in your past conversations', 'OPEN HISTORY'),
];



const Dashboard = () => {
  return (
    <div className="bg-slate-600">
      <div className="flex justify-center py-5 bg-slate-200 align-middle">
        <atlas-logo></atlas-logo>
      </div>
      <div className='flex flex-wrap justify-around m-5 p-5'>
        <Card title='New Conversation' path={'/chat/new'} message={rows[0].btnName} description={rows[0].description} style="bg-blue-600"></Card>
        <Card title='Watchlist' path={'/watchlist'} style="bg-green-600" message={rows[1].btnName} description={rows[1].description}></Card>
        <Card title='History' path={'/history'} style="bg-yellow-600" message={rows[2].btnName} description={rows[2].description}></Card>
      </div>
      <div className='p-10'>
       <Table></Table>
       </div>
    </div>
  )
}

export default Dashboard