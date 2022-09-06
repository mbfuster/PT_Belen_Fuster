// import logo from './logo.svg';
import './App.css';
// import Login from './pages/Login';
import Greet from './components/Greet';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Navigator from './components/Navigator';


function App() {
  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
