import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { Userid } = useParams();
  return (
    <div className=' bg-green-300 p-4 text-3xl  text-center ' > User: {Userid}</div>
  )
}

export default User