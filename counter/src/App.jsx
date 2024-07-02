import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [a, b] = useState(0)
  useEffect(() => {
    document.title = a
  } );
  

  return (
    <>
      <h1>Radhe Radhe</h1>
      <h3> counter Value : {a} </h3>
      <button  style={{margin:10}}
       onClick={() => b(a+1)} > + </button> 
      <button
      onClick={() => b(a-1)}> - </button>

    </>
  )
}

export default App
