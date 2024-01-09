import React from 'react'

const Nav = ({data}) => {
  return (
    <div className='nav mt-1 h-20 w-full bg-slate-300 flex justify-between items-center px-20'>
    <h1>Orange</h1>
    <div className=' flex gap-6 bg-yellow-200'>
    <h2>Faviourite</h2>
    <h2>{data.filter((items,index)=>items.added).length}</h2>


    </div>

  </div>
  
  )
}

export default Nav