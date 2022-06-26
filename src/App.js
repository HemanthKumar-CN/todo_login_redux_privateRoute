import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import PrivateRoute from './HOC/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <PrivateRoute><Home/></PrivateRoute> } />
        <Route path='/todo' element={<PrivateRoute><Todo/></PrivateRoute>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </div>
  );
}

export default App;
