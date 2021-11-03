
import './App.css';
import LifeCycleA from './components/LifeCycleA';
//import Form from './components/Form';
//import Inline from './components/Inline';
//import NameList2 from './components/NameList2';
//import NameList from './components/NameList';
//import UserGreeting from './components/UserGreeting';
//import Navbar from './components/Navbar';
// import {Greet} from './components/Greet';
// import Welcome from './components/welcome';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Eventbind from './components/EventBind';
 //import ParentComponent from './components/ParentComponent';
// // import test from './components/test';
// import childComponent from './components/childComponent';
//import StyleSheet from './components/StyleSheet';
//import './AppStyles.css'
//import styles from './AppStyles.module.css'




//import {Hello} from './components/hello';
//import Message from './components/message';
//import Counter from './components/counter';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <LifeCycleA/>

      {/* <Form></Form> */}
      {/* <Inline></Inline>
      <h1 className='error' >ERROR</h1>
      plain .css file makes classes local by default
      <h1 className={styles.success} >SUCCESS</h1>
      modules.css is specific to the place and cant be used in chil component */}


      {/* <StyleSheet Primary={true}></StyleSheet> */}
      {/* <NameList2/> */}
      {/* <NameList/>  */}
      {/* <UserGreeting/>
        <ParentComponent></ParentComponent> */}
       {/* <Eventbind></Eventbind> */}
       {/* <ClassClick></ClassClick>
      <FunctionClick></FunctionClick> 
      
     {/* <Greet name='bruce' hero='batman' />
     <Welcome name='bruce' hero='batman' /> */} 

    </div>
  );
}

export default App;
