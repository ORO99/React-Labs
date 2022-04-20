import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/counter/Counter';
import Navbar from './components/navbar/Navbar';
import EPForm from './components/form/EPForm';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Todo from './views/Todo'
import React from 'react';


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/Products/:id" element={<ProductDetails/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/Todo" element={<Todo/>}/>
        <Route path="/form" element={<EPForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
