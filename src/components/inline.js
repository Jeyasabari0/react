import React from "react";

const heading ={
    fontSize:'85px',
    color:'red'
}

function Inline(){
    return(
        <div>
            <h1 style={heading}>inline</h1>
            <h1 className='error'>error</h1>
        </div>
    )
}
export default Inline