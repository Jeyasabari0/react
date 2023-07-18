import React,{useState} from 'react'

const Form=()=> {
      const[details,setdetails]=useState({
        name:"",
        email:"",
        password:"",
        address:""
      })
      const Change=(e)=>{
         const{name,value}=e.target;
         setdetails((prev)=>{
             return {...prev,[name]: value}
         })
      }

      const Submit=(e)=>{
        e.preventDefault()
        console.log(details)
      }

  return (<div>
      <form onSubmit={Submit}>
        <h3>Name:</h3><input type="text" name="name" onChange={Change}/>
        <h3>Email:</h3><input type="email" name="email" onChange={Change}/>
        <h3>Password:</h3><input type="password" name="password" onChange={Change}/>
        <h3>Address:</h3><textarea name="address" onChange={Change}></textarea> 
        <div><button type="submit">Submit</button></div>
      </form>
    </div>
  )
}

export default Form
