import React from 'react'
import { useState } from 'react'
function Child(props) {
    const getstate=(name)=>{
        console.log("from parent"+name);
            }

    const [name,setName]=useState('')
    const submit=(e)=>{
        e.preventDefault()
        props.getState(name)
    }
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Child
