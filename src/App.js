import logo from './logo.svg';
import './App.css';
import WholeApplication from './ComponentsFolder/WholeApplication';
import DisplayPage from './ComponentsFolder/displaypage';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
     <Routes>
                <Route path="/" element={ <WholeApplication></WholeApplication>}  />
                <Route path="searchresult" element={ <DisplayPage></DisplayPage>}  />
               
    </Routes>
    </div>
  );
}

export default App;
