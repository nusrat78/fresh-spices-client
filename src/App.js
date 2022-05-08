import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs/Blogs';
import Notfound from './components/NotFound/Notfound';
import Headers from './components/Headers/Headers';
import Footer from './components/Footer/Footer';
import Inventories from './components/Home/Inventories/Inventories';
import Login from './components/Login/Login/Login';
import Register from './components/Register/Register/Register';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddItem from './components/Item/AddItem.js/AddItem';
import ManageItem from './components/Item/ManageItem/ManageItem';


function App() {
  return (
    <div>
      <Headers></Headers>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventories" element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>

        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/addItem" element={
          <RequireAuth> <AddItem></AddItem></RequireAuth>


        }>

        </Route>
        <Route path="/manageItem" element={
          <RequireAuth><ManageItem></ManageItem></RequireAuth>


        }>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
