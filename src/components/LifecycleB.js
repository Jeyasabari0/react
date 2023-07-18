import React, { Component } from "react";

class LifecycleB extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'sabari'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
     
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shoulComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getsnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycleb componenDidUpdate')
    }


    render() {
        console.log('LifecycleB render')
        return(
            <div>
              LifecycleB
            </div>
        )
    }
}
export default LifecycleB