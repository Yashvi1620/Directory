
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import New from './Pages/New';
import Info from './Pages/Info';

function App() {
  return (
    <div className="App">
     <Header/>
     <Button/>
     
     <Routes>
        <Route path="/" element={<New/>} />
        <Route path="/retrieve" element={<Info />} />
      </Routes>
     
    </div>
  );
}

export default App;
