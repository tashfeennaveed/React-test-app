

import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
//import { UserProvider } from './components/UserContext';
// import {Greet} from './components/Greet';
//import StyleSheet from './components/StyleSheet';
//import './AppStyles.css'
//import styles from './AppStyles.module.css'





function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <HookCounter/>
      


      {/* <UserProvider value='QWE'>
      <CompA/>
      </UserProvider> */}
      
 
      {/* <CounterRenderProp>
      {(count, ClickHandler) => (
        <CounterRenderPropCH count={count} ClickHandler={ClickHandler}/>
      )}
      </CounterRenderProp> */}


      {/* <ErrorBoundary> 
      <Hero heroname='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname='superman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname='joker' />
      </ErrorBoundary> */}


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
