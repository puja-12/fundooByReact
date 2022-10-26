import logo from './logo.svg';
import './App.css';
import Signin from './pages/signin1/signin';
import Signup from './pages/signup/Signup';
import Header from './component/Header/header';
import TakeNote1 from './component/Takenote1/takenote1';
import TakeNote2 from './component/Takenote2/takenote2';

function App() {
  return (
    <div className="App">
      <Header />
      <TakeNote1 />
      <TakeNote2 />
     {/* <Signin />
     <Signup /> */}
 
    </div>
  );
}

export default App;
