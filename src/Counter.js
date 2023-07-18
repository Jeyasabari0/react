import React, {useEffect,useState } from "react";
import Unmount from "./Unmount";
function Counter(){
const [count,setCount] = useState(0);
function increment(){
    setCount(prevState => prevState+1);
}
// Mounting
// useEffect(()=>{
//    console.log('Mouting')
// },[]);

// Updating
// useEffect(()=>{
// console.log('updating')
// },[count])

// Unmounting
useEffect(()=>{
    return()=>{
        console.log('Unmounting')
    }
    },[count])

return(
<div className="App">
<button onClick={()=>increment()}>Increase Count</button>
<h2>{count}</h2>
<Unmount />
</div>
)
}
export default Counter