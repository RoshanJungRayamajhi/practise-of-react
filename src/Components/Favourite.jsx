import React from 'react'
import { useSelector } from 'react-redux'

const Favourite = () => {
  
  const group = useSelector((store)=>store?.favourite?.items)
 
  return (  <>
   {group && group.map((product)=>( <div className='relative mt-10 m-2 bg-zinc-400 w-fit h-32 flex gap-5 rounded-md px-4 py-3'>
   <div className='h-24 w-36 '>
   <img className=' h-full w-full bg-cover bg-center rounded-md' src={product.img}  alt="" />

   </div>
   <div >
     <h1 className=' text-xl font-medium mb-2'>{product.Artist}</h1>
     <h3 className=' font-normal mb-2' >{product.Songname}</h3>
   </div>
   
 </div>))
 }

</>
  )
}

export default Favourite