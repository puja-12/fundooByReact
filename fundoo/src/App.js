// import logo from './logo.svg';
import './App.css';
import Signin from './pages/sign_in/signin';
import Signupp from './pages/sign_up/Signupp';
import Header from './component/header';
import TakeNote1 from './component/takenote1/takenote1'
import TakeNote2 from './component/takenote2/takenote2';
import Takenote3 from './component/takenote3/takenote3';
import Dashboard from './component/dashboard/dashboard'
import ColorPopper from './component/colorPopper/colorPopper';
import { Provider } from 'react-redux';
import store from './component/Redux/store';
import RouterOne from './component/router/router';

function App() {
  return (
    <div className="App">
     {/* <Dashboard /> */}
      {/* <ColorPopper /> */}
      
     {/* <Signin /> */}
     {/* <Signupp /> */}
     {/* <Header /> */}
     {/* < TakeNote1 />
      <TakeNote2 />
      <Takenote3 /> */}
      <Provider store={store}>
      <RouterOne />
      </Provider>
      
     
    </div>
  );
}


export default App;
