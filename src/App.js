import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ItemPage from "./pages/ItemPage";




function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [] )

  
  return (
    <div className="App">
     
      <Header /> 
      <Navbar />
      <Routes>
        {/*<Route index element={<ProductList/>}/>*/}
        <Route path ="/" element = {<ProductList/>}/>
        <Route path ={'form'}element={<Form/>}/>
        <Route path ="/itemPage" element = {<ItemPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
