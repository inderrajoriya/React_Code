import { useState } from 'react'
import './App.css'

function App() {
  const [a, b] = useState(0)

  return (
    <>
      <h1>Radhe Radhe</h1>
      <h3> counter Value : {a} </h3>
      <button onClick={() => b(a+1)} > Add Number </button> 
      <button onClick={() => b(a-1)}> Remove Number </button>

    </>
  )
}

export default App
