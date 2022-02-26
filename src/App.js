import './App.css';
import Header from './Components/Header';
import Photos from './Routes/Photos';
import { Route, Routes } from 'react-router-dom'
import Cart from './Routes/Cart';
import NoMatch from './Routes/NoMatch';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={ <Photos />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="*" element={ <NoMatch />} />
      </Routes>

    </div>
  );
}

export default App;
