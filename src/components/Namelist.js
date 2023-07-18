import React from 'react'

function Namelist() {
    const names=['person1','person2','person3']
  return (
    <div>
      {
     names.map(name=><h2>{name}</h2>)
      }
    </div>
  )
}

export default Namelist
