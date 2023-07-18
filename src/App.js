
import { Component } from 'react';
import { useEffect,useState } from 'react';
import './App.css';
// import Greet from './components/greet'
// import Welcome from './components/welcome';
// import Style from './components/style';
// import Inline from './components/inline';
// import './appstyle.css'
// import styles from './appstyle.module.css'
// import LifecycleA from './components/LifecycleA';
import Counter from './Counter';
// import Counter2 from './Counter2.js';
// import Contact from './components/contact';
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';
// import EventBinding from './components/EventBinding';
// import Form from './components/Form';
// import Twoway from './components/Twoway';
// import UserGreeting from './components/UserGreeting';
// import { BasicTable } from './components/BasicTable';
// import Child from './components/Child';
// import Namelist from './components/Namelist';
class App extends Component{
  render(){
   
  return (
    <div className='App'>
      {/* <Greet name="sathis" />
      <Greet name="visva" />
      <Greet name="fayaz" />
      <Welcome /> 
      <Style primary={true}/>
      <Inline />
      <h1 className='error'>error</h1>
      <h1 className={styles.success}>sucess</h1>
  <LifecycleA /> */}
      <Counter />
      {/* <Counter2 />
     <Contact />
      <Message />
     <FunctionClick /> 
      <EventBinding /> 
     <Form/> 
     <Twoway /> 
  <Usereeting/>  */}
     {/* <BasicTable />  */}
     {/* <Child getstate={getstate}/>  */}
     {/* <Namelist/> */}
    </div>
  );
}
}

export default App;
