import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Sidebar from './page/Sidebar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Order from './page/Order';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Order />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
