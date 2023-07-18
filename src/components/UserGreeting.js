import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true
      }
    }
    
  render() { 
    // short circuit operator
    return this.state.isLoggedIn&&<div>Welcome Mr.Sabri</div>

    // ternary operator
    // return(
    //     this.state.isLoggedIn?
    //     <div>Welcome Mr.Sabari</div>:
    //     <div>Welcome Guest</div>
    // )

    // using Elementvariable
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Mr.Sabari</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return<div>{message}</div>

    // if (this.state.isLoggedIn){
    //     return <div>welcome Mr.Sabari</div>
    // }
    // else{
    //     return <div>welcome Guest</div>
    // }

    return (
      <div>
        <div>welcome Mr.Sabari</div>
        <div>welcome Guest</div>
      </div>
    )
  }
}

export default UserGreeting
