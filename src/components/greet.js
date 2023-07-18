import React from 'react'

// function Greet(){
//     return <h1>Hai sabari</h1>
// }

const Greet = (props) => {
    console.log(props)
return <h1>hai {props.name} a.k.a {props.secname}</h1>
}
 export default Greet
