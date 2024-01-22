import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({data}) => {
  return (
    <div className='nav mt-1 h-20 w-full bg-slate-300 flex justify-between items-center px-20'>
    <h1>Orange</h1>
    <Link to="/" >Home</Link>
    <Link to="/favourite" className=' flex gap-6 bg-yellow-200'>
    <h2>Faviourite</h2>
    <h2>{data.filter((items,index)=>items.added).length}</h2>


    </Link>

  </div>
  
  )
}

export default Nav