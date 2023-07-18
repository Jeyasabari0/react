
import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }
    
    clickhandler(){
        this.setState({
            message:'bye'
        })

    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickhandler.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBinding
