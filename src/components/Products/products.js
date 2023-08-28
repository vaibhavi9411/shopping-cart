import React, { useState } from 'react';
import './products.css';
import Hamburger from './assets/hamburger.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ProductData from './productData.json';
import { AddToCart } from '../Cart-Sidebar/cartSidebar';

function Products() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    let [selectedProductArr, setSelectedProductArr ] = useState([])
    const addToCart = (selectedProduct) => {
        const uniqueElements = new Set(selectedProductArr);
        selectedProduct['qty'] = 1;
        if(!uniqueElements.has(selectedProduct)){
            setSelectedProductArr([...selectedProductArr,selectedProduct])
        }
        if(isCartOpen){
            setIsCartOpen(isCartOpen)
        }
        else{
            setIsCartOpen(!isCartOpen);
        }
    }
    return (
        <div className='product-section'>
            <div className='product-header'>
                <div className="arrowIconLeft"><BsChevronLeft /></div>
                <div className='product-title'>
                    <h1>Hamburger</h1>
                    <span>Discover whatever you need easily</span>
                </div>
                <div className='product-path'>
                    <span>MENUS</span>
                    <div className="arrowIcon"><BsChevronRight /></div>
                    <span>FOOD</span>
                    <div className="arrowIcon"><BsChevronRight /></div>
                </div>
            </div>
                <div className='product-details'>
                    {
                        ProductData.map((val, key) => {
                            return (
                                <div key={key} className='product-item' onClick={ ()=> addToCart(val)}>
                                    <img src={Hamburger} />
                                    <div className='product-name'>{val.name}</div>
                                    <div className='product-price'>{val.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
            {isCartOpen ? <AddToCart setSelectedProductArr={setSelectedProductArr} setSidebarState={setIsCartOpen} selectedProductList={selectedProductArr} sidebarState={isCartOpen}/>  : ''}
        </div>
    )
}

export default Products