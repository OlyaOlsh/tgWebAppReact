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
import AddProduct from './pages/AddProduct/AddProduct';
import Home from './pages/Home/Home';


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
       {/* <Route path ="/addproduct" element = {<AddProduct/>}/>*/}
      </Routes>

    </div>
  );
}

export default App;
