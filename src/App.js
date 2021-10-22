import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/welcome';
//import {Hello} from './components/hello';
//import Message from './components/message';
//import Counter from './components/counter';


function App() {
  return (
    <div className="App">
      
     <Greet name='bruce' hero='batman' />
     <Welcome name='bruce' hero='batman' />

    </div>
  );
}

export default App;
