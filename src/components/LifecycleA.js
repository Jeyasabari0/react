import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'sabari'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
     
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shoulComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getsnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componenDidUpdate')
    }

changestate = () =>{
    this.setState({
        name:'vanakam'
    }
    )
}

    render() {
        console.log('LifecycleA render')
        return(
            <div>
              <div>LifecycleA</div>
              <button onClick={this.changestate}>change state</button>
              <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA