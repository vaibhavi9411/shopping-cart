import React, { useEffect, useState } from 'react';
import './cartSidebar.css';
import { BsXLg, BsThreeDots } from 'react-icons/bs';
import Hamburger from '../Products/assets/hamburger.png';

export function AddToCart({ selectedProductList, sidebarState, setSidebarState, setSelectedProductArr }) {
    const [ totalValue , setTotalValue ] = useState({'subtotal': 0.0,'taxTotal': 0.0 , 'total': 0})

    useEffect(() => {
        calculateTotal()
    },[selectedProductList])

    const calculateTotal = () => {
        var subTotal = 0.0
        var taxTotal = 0.0
        var total = 0.0

        selectedProductList.map((item,key) => {
            var itemPrice = parseFloat(item.price.replace('$', '')) * item.qty
            subTotal = (+subTotal + +itemPrice).toFixed(2) 
            taxTotal = (+subTotal / 10).toFixed(2) 
            total = (+subTotal + +taxTotal).toFixed(2)
        })
        setTotalValue({
            'subtotal': subTotal,
            'taxTotal': taxTotal,
            'total': total
        })
    }

    const closeSidebar = () => {
        setSidebarState(!sidebarState)
    }

    const addProduct = (product) => {
        var result = selectedProductList.map((val,key) => {
            if(product.id == val.id){
                val.qty += 1
            }
            return val
        })
        setSelectedProductArr([...result])
    }

    const removeProduct = (product) => {
        var result
        if(product.qty > 1){
            result = selectedProductList.map((val, key) => {
                if (product.id == val.id) {
                    val.qty -= 1
                }
                return val
            })
        }
        else{
            result = selectedProductList.filter((val, key) => {
               return val.id !== product.id
            })
        }
        setSelectedProductArr([...result])
    }

    return (
        <div className='my-order-list'>
            <div className='cart-top-section'>
                <div className='cart-header w-90'>
                <h2>My Order</h2>
                <span>Take out</span>
                </div>
                <div className='cart-close-icon' onClick={closeSidebar}><BsXLg/></div>
            </div>
            <div className='cart-product-item-list'>
                {
                    selectedProductList.map((item,index)=> {

                        return (
                            <div>
                                <div key={index} className='cart-product-item'>
                                    <img src={Hamburger} />
                                    <div className='cart-product-name'>
                                        <h4>{item.name}</h4>
                                        <span>{item.price}</span>
                                    </div>
                                    <div className='cart-product-price'>
                                        <BsThreeDots />
                                        <div>
                                            <button className='remove-product' onClick={() => {removeProduct(item) }}>-</button>
                                            <span>{item.qty}</span>
                                            <button className='add-product' onClick={() => {addProduct(item)}}>+</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
                <div className='cart-footer'>
                    <div>
                        <div className='cart-product-subtotal'>
                            <span>Subtotal</span>
                            <span>${totalValue.subtotal}</span>
                        </div>
                        <div className='cart-product-tax'>
                            <span>Tax(10%)</span>
                            <span>${totalValue.taxTotal}</span>
                        </div>
                        <hr className='dashed-line' />
                        <div className='cart-product-total'>
                            <span>Total</span>
                            <span>${totalValue.total}</span>
                        </div>
                        <button>Print Bills</button>
                    </div>
                </div>
            </div>
        </div>
    )
}