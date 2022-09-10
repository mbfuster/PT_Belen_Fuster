import './App.css';
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import { AuthProvider}  from './context/AuthContext';
import { ProtectedRoute } from './pages/ProtectedRoute';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // fetch("/testAPI")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data.message)
    //     console.log(data.message)
    //   });
  }, []);

  return (
    <div className="App">
      
      <AuthProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>      
      </AuthProvider>
    </div>
  );
}

export default App;
