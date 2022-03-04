import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
