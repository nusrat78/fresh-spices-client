import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs/Blogs';
import Notfound from './components/NotFound/Notfound';
import Headers from './components/Headers/Headers';
import Inventories from './components/Home/Inventories/Inventories';
import Login from './components/Login/Login/Login';
import Register from './components/Register/Register/Register';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';


function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventories" element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetails></InventoryDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
