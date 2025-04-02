import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

function Dashboard() {
  return (
    <div className='bg-slate-900 text-white flex justify-between p-4 flex-wrap gap-2 m-1'>
        <Sidebar />
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Dashboard