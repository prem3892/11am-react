import React from 'react'
import Crausel from '../components/Crausel'
import Card from '../components/Card'

function HeroSection() {
  return (
    <div className='bg-slate-900'>

        <Crausel />

            <div className='flex flex-wrap justify-around gap-5'>
            <Card />
        <Card />
        <Card />
        <Card />
        <Card /> 
            </div>
    </div>
  )
}

export default HeroSection