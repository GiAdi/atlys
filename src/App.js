import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </div>
  );
}

export default App;
