import React, { useState } from 'react'

function Twoway() {
    const [greet,setgreet]=useState("welcome")
    console.log({greet})
  return (
    <div>
      <input type='text' value={greet} onChange={(event)=>{
        const value=event.target.value
        setgreet(value)
      }}/>
      {greet}
    </div>
  )
}

export default Twoway
