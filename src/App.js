import logo from './logo.svg';
import './App.css';
import WholeApplication from './ComponentsFolder/WholeApplication';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
     <Routes>
                <Route path="/" element={ <WholeApplication></WholeApplication>}  />
               
    </Routes>
    </div>
  );
}

export default App;
