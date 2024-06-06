import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/inderrajoriya')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
    <div className=" w-5/6 h-1/2 m-auto p-4 ">
        
    <div className=' text-center m-4  text-black p-4 text-3xl'>Github followers: {data.followers}
    <h1 className='text-3xl font-bold'>{data.name}</h1>
    

    <img className=' rounded-full ' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
   
    </>
   
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/inderrajoriya')
    return response.json()
}