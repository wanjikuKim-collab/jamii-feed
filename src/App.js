import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }></Route>
        <Route exact path='/profile/:id' element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
