import React from "react";
import './mystyle.css'

function Style(props){
    let className = props.primary ?'primary':''
    return(
     <div>
     <h1 className={`${className} font`}>style</h1>
     </div>
    )
}
export default Style