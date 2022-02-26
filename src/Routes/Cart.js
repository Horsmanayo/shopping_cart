import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import CartItem from '../Components/CartItem'
import { Context } from '../Context'


function Cart() {

  const { cartItems, emptyCart } = useContext(Context)
  const [button, setButton] = useState("Placing Order")

  


  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder(){
    setButton("Initiating Order ........")
    setTimeout(() => {
      toast.success('Order successful')
      setButton('Placing Order')
      emptyCart()
    }, 3000)
  }
  

  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

  return (
    <div>
      <h1>Cart</h1>
      {cartItemElements}
      <p className="total-cost">Total:{totalCostDisplay} </p>
      <div className="order-button">
        <button 
          onClick={placeOrder}
          // disabled={cartItems.length === 0}
        >
          {button}
        </button>
      </div>
    </div>
    
  )
}

export default Cart