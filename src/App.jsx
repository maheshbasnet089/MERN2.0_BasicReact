import { useEffect, useState } from "react"


function App() {
  const [count,setCount] = useState(0)
  const [nextCount,setNextCount] = useState(0)
  // first type 
  // useEffect(()=>{
  //   console.log("Not count wala useEffect")
  // },[])
  
  //second type 
  // useEffect(()=>{
    
    //   console.log("count wala useEffect")
  // },[count])
  // third type
  // useEffect(()=>{
  //   console.log("Third useEffect was called")
  // })
  return (
    <>
       <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{nextCount}</h1>
      <button onClick={()=>setNextCount(nextCount+1)}>+</button>
    </>
  )
}


export default App

