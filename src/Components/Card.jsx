import React from 'react'

const Card = ({index,img,Artist,handler,Songname,added}) => {
  return (
 
    <div className='relative mt-10 m-2 bg-zinc-400 w-fit h-32 flex gap-5 rounded-md px-4 py-3'>
      <div className='h-24 w-36 '>
      <img className=' h-full w-full bg-cover bg-center rounded-md' src={img}  alt="" />

      </div>
      <div >
        <h1 className=' text-xl font-medium mb-2'>{Artist}</h1>
        <h3 className=' font-normal mb-2' >{Songname}</h3>
      </div>
      <button onClick={()=>handler(index)} className={` rounded-full px-2 p-1 text-nowrap ${added ?" bg-green-300":" bg-yellow-300"} absolute bottom-[-25%] left-[50%] translate-x-[-50%] translate-y-[-50%]`} >{added? 'Added ':"Add to the faviourite"}</button>
      
    </div>
    
  )
}

export default Card