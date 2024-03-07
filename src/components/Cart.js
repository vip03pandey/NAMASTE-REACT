import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const cartItems=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch();
  const handleClearCart=()=>
{
    dispatch(clearCart())
}
  return (
    <div className='text-center m-5 p-5'>
      <h1 className='text-4xl font-bold'>Cart</h1>
      <button className='border bordre-solid border-gray p-2 rounded-lg my-5 bg-red-500 text-white font-semibold'
      onClick={handleClearCart}
      >Clear Cart</button>
      {cartItems.length===0 && <h1 className='text-2xl font-bold'>Your Cart is Empty . Add Items to Cart </h1>}
      <div className='w-5/12 m-auto border border-solid border-gray rounded-lg shadow-lg my-4'> 
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
