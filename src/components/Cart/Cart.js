import React, { Fragment } from 'react'
import "./Cart.css"
import CartItemCard from './CartItemCard';
import{ useSelector,useDispatch} from "react-redux";
import { addItemsToCart , removeItemsFromCart } from '../../actions/cartAction';
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';




 const Cart = ({history}) => {
  const dispatch = useDispatch();
  const{ cartItems } = useSelector((state) => state.cart);

  const increaseQuantity=(id,quantity,stock ) => {
      const newQty = quantity + 1;
      if (stock <= quantity){
        return;
      }
      dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity=(id,quantity ) => {
    const newQty = quantity - 1;
    if (1 >= quantity){
      return;
    }
    dispatch(addItemsToCart(id, newQty));
};
 const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
 };
const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };


  const item={
    product:"productID",
    price:"0",
    name:"abc",
    quantity: "0",
    image: "",
  };
  return <Fragment>
     cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>)
       <div className="cartPage">
         <div className="cartHeader">
           <p>Product</p>
           <p>Quantity</p>
           <p>Subtotal</p>
         </div>
         {cartItems && cartItems.map((item) => (
          <div className="cartContainer" key={item.product}>
          <CartItemCard item={item} deleteCart={removeItemsFromCart}/>
          <div className="cartInput">
          <button >-</button>
          <input type="number" value={item.quantity} readOnly></input>
          <button >+</button>
           
          </div>
          <p className= "cartSubtotal">{`₹${item.price * item.quantity}`}</p>
          </div>

         ))}
         <div className="cartContainer">
          <CartItemCard item={item}/>
          <div className="cartInput">
          <button onClick={()=>decreaseQuantity()}>-</button>
          <input type="number" value={item.quantity} readOnly></input>
          <button onClick={()=>increaseQuantity()}> +</button>
          
          </div>
          <p className= "cartSubtotal">{`₹${item.price * item.quantity}`}</p>
          </div>
          <div className= "cartGrossProfit">
            <div></div>
            <div className= "cartGrossProfitBox">
              <p>Gross Total</p>
              <p>₹0</p>
            </div>
            <div></div>
            <div className= "checkOutBtn">
              <button onClick={checkoutHandler}>Check Out</button>
            </div>
          </div>
       </div>
  </Fragment>;
  
  
}
export default Cart;