import './styles/reset.css';
import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ItemPage from "./pages/ItemPage/ItemPage";
import Contacts from './pages/Contacts/Contacts';
import ScrollToTop from './utils/scrollToTop';
import AddProducts from './AddProducts/AddProducts';
import Home from './pages/Home/Home';
import PreAddPro from './pages/preFolder/PreAddPro';
import ProductForm from './pages/preAddProduct/ProductForm';
import MyTest from './pages/Test/MyTest';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [] )
  
  
  return (
    <div className="App">
      <ScrollToTop/> 
      <Header /> 
      <Navbar />
      <Routes>
        {/*<Route index element={<ProductList/>}/>*/}
        <Route path ="/home" element = {<Home/>}/>
        <Route path ="/" element = {<ProductList/>}/>
        <Route path ={'form'}element={<Form/>}/>
        <Route path ="/product/:id" element = {<ItemPage/>}/>
        <Route path ="/contacts" element = {<Contacts/>}/>
        <Route path ="/addproducts" element = {<AddProducts/>}/>
        <Route path ="/preAddPro" element = {<PreAddPro/>}/>
        <Route path ="/productForm" element = {<ProductForm/>}/>
        <Route path ="/mytest" element = {<MyTest/>}/>
      </Routes>

    </div>
  );
}

export default App;