import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Topbar from './components/Topbar/topbar';
import Products from './components/Products/products';

function App() {
  return (
    <div>
      <section className='products-kart-dashboard'>
        <Sidebar />
        <section className='w100'>
          <Topbar />
          <Products />
        </section>
      </section>
    </div>
  )
}

export default App;
