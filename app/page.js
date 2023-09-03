"use client"
import React, {useState} from 'react';

export default function Home() {
 const [title, setTitle] = useState("")
 const [desc, setDesc] = useState("")
 const [mainTask, setMainTask] = useState([])

 const saveHandler = (e) => {
  e.preventDefault()
  setMainTask([...mainTask, {title, desc}])
  setTitle("")
  setDesc("")
 }
 const deleteHandler = (i) => {
  let copyTask =  [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)
 }
 const doneHandler = (i) => {
  let copyTask =  [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)
 }

 let renderTask = <h2 
 className="bg-white/50 p-2 pl-4 rounded-xl shadow text-3xl">
  No Task Available
  </h2>;
 if (mainTask.length>0) {
  renderTask = mainTask.map((t,i)=> {
   return <li 
   key={i}
   className="bg-white/50 p-2 pl-4 rounded-xl shadow relative mb-4 sm:flex sm:justify-between">
    <div>
    <h2 className="text-3xl">{t.title}</h2>
    <h4 className="text-xl">{t.desc}</h4>
    </div>
    <div className="flex justify-center mt-4 sm:absolute sm:top-4 sm:right-4 sm:mt-0 sm:justify-end">
    <button 
   onClick={()=>{
    deleteHandler(i)
   }}
   className="bg-red-400/80 mr-2 text-white p-2 rounded-full w-2/5 h-10 font-semibold sm:w-auto sm:px-4 sm:py-2">
    Delete
    </button>
    <button 
   onClick={()=>{
    doneHandler(i)
   }}
   className="bg-green-400/80 text-white p-2 rounded-full w-2/4 h-10 font-semibold sm:w-auto sm:px-8 sm:py-2">
    Done
    </button>
    </div>
    </li>
  })
 } else {

 }

  return (
   <main className="bg-white/20 h-screen backdrop-blur-sm backdrop-saturate-200">
   <div className="bg-blue-600 h-20 w-20 top-20 left-10 absolute -z-10 rounded-full">
   </div>
   <h1 className="bg-white/80 p-2 text-black text-3xl text-center font-semibold shadow-md shadow-black/10 tracking-tight sm:shadow-black/50">Open To Do</h1>
   <button 
   className="fixed bg-white/80 w-14 h-14 rounded-full shadow bottom-8 right-8">
   X
   </button>
   <form  
   onSubmit={saveHandler}
   className="p-4 gap-4 grid  justify-items-center fixed bottom-0 bg-white/80 pt-6 backdrop-blur-md rounded-t-3xl sm:flex sm:relative sm:rounded-none origin-center border-t-black border-t-4 sm:border-0 ">
    <input 
   type="text"
   placeholder="Enter Your Title"
   value={title}
   onChange={(e)=>{
    setTitle(e.target.value)
   }}
   className="p-2 pl-4 border-gray-400 border-2 bg-white/20 rounded-full hover:outline-none hover:border-black w-full text-xl backdrop-blur-sm"
   />
    <input 
   cols="4"
   type="text"
   placeholder="Enter Yout Description"
   value={desc}
   onChange={(e)=>{
    setDesc(e.target.value)
   }}
   className="pl-4 p-2 border-gray-400 border-2 bg-white/20 rounded-full hover:outline-none hover:border-black w-full backdrop-blur-sm"
   />
   <div className="flex w-full gap-4 sm:w-2/4">
   <button
   type="close"
   className="p-2 bg-black/80 text-white w-full h-fit rounded-full text-xl font-semibold sm:hidden"
   >Close</button>
   <button
   type="submit"
   className="p-2 bg-black/80 text-white w-full h-fit rounded-full text-xl font-semibold">
   Save
   </button>
   </div>
   </form>
   <br/>
   <div className="p-4 overflow-x-hidden overflow-y-scroll">
    <ul>
   {renderTask}
    </ul>
   </div>
   </main>
  )
}
