"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler =(e)=>{
   e.preventDefault()
   setMainTask([...mainTask ,{title, desc}]);
   setTitle("")
   setDesc("")
   console.log(mainTask)
  }

const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
}

  let renderTask =<h2>No Task Available</h2>

  if(mainTask.length > 0){
  renderTask = mainTask.map((t,i)=>{
  return (
<li className='flex items-center justify-between mb-5'>
<div className='flex  items-center justify-between  w-2/3'>
    <h4 className='font-bold'>{t.title}</h4>
    <h5 className='font-bold'>{t.desc}</h5>
   </div>
   <button onClick={()=>{deleteHandler(i)}} 
    className='bg-red-400 text-white font-bold px-3 py-1 ml-2 rounded'>
    Delete
   </button>
</li>

   )
  })
}

  return (
    <>
    <h1 className='bg-black text-white font-bold px-4 py-3 text-center text-2xl'> My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input
      type='text'
      className='text-2xl border-zinc-800 border-4 m-10 px-4 py-1'
      placeholder='Enter your title'
      value={title}
      onChange={(e)=>{
            setTitle(e.target.value)
      }}
      />
       <input
      type='text'
      className='text-2xl border-zinc-800 border-4 m-10 px-4 py-1'
      placeholder='Enter your text'
      value={desc}
      onChange={(e)=>{
          setDesc(e.target.value)
      }}
      />
      <button
       className='bg-black font-bold text-white m-5 px-4 py-2 rounded'>
        Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page
