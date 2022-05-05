import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/NotFound/Notfound';
import Headers from './components/Headers/Headers';

function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
