//import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Redux/Cartslice';


const Cart = () => {
    const dispatch =useDispatch();
    const cartitems = useSelector((state)=>state.cart) 
    const handleremove =(id)=>{
        dispatch(remove(id))
    }
  return (
    <div>
        <h3>Cart Page</h3>
    <div className='cartWrapper'>
        {cartitems.map((item)=>(
            <div className='cartCard' key={item.product.id}>
            <img src={item.product.image} alt="img"/>
            <h5>{item.product.title}</h5>
            <h5>{item.product.price}</h5>
            <button className='btn' onClick={()=>handleremove(item.product.id)}>Remove</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Cart