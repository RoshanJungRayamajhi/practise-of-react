import React, { useState } from 'react'
import Card from './Card';
import Nav from './Nav';



const Home = () => {
    const data = [
        {
          img: "https://plus.unsplash.com/premium_photo-1700081737402-8aad0453bff8?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          Artist: "Arjit",
          Songname: "tumhi ho",
          added: false,
        },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "sushant", Songname: "satayera", added: false },
        { img: "https://media.istockphoto.com/id/1427952718/photo/portrait-of-confident-man.jpg?s=1024x1024&w=is&k=20&c=QsNumYUmGiiATaFjLmjyJmQQVJVU2_Jh6kE7CcB82m8=", Artist: "Gopal", Songname: "nepali hami", added: false },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "sushant", Songname: "satayera", added: false },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "njk", Songname: "satayera", added: false },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "prabhash", Songname: "satayera", added: false },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "pradip khadka", Songname: "satayera", added: false },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "bishnumajhi", Songname: "satayera", added: false },
        { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "paspatisharma", Songname: "satayera", added: false },
        
      
      
      
      ];
      const [songdata, setsongdata] = useState(data);
      const handler =(index)=>{
        setsongdata((previousdata)=>previousdata.map((items,i)=>{
          if(i== index) return {...items, added:!items.added}
          return items;
        }))
      }
      
     
  return (
    <>
    <Nav data={songdata}/>
    <div className=' flex justify-center items-center flex-wrap'>
    {
      songdata.map((items,index)=><Card key={index} value={items} index={index} img={items.img} handler={handler} Artist ={items.Artist} Songname ={items.Songname} added={
        items.added
      } />)
    }
   </div>
    </>
  
  )
}

export default Home