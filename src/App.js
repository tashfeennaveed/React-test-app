import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

//import {Hello} from './components/hello';
//import Message from './components/message';
//import Counter from './components/counter';


function App() {
  return (
    <div className="App">
       <ClassClick></ClassClick>
      <FunctionClick></FunctionClick> 
      
     {/* <Greet name='bruce' hero='batman' />
     <Welcome name='bruce' hero='batman' /> */}

    </div>
  );
}

export default App;
