
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DashBoard from './Component/DashBoard';
import Home from './Component/Home';
import Login from './Component/Login';
import MainRoute from './Routes/MainRoute';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <MainRoute/>
     </BrowserRouter>
    </div>
  );
}

export default App
