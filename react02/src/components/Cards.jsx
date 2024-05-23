import React from 'react'


function Cards({add}) {
    return (
        <div className="w-[450px] h-[250px] rounded-md border mx-auto">
          <img
            src={"add"}
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className=" m-2">
            <h1 className="text-lg font-semibold">Hare Krishna</h1>
          </div>
        </div>
      )
}

export default Cards

