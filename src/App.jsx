
import { useState } from 'react'


function App() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("Manish")
  
  return (
  <>
  <h1>{count}</h1>
  <button onClick={()=>setCount(count + 1)}>+</button>
  <button onClick={()=>setCount(count - 1 )}>-</button>
  <h1>{name}</h1>
  <button onClick={()=>setName("Mahesh")}>Change Name</button>
  </>

  )
}


export default App

