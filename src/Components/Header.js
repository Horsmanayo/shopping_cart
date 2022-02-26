import React, {useContext} from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
import { Context } from "../Context"

function Header() {

    const { cartItems } = useContext(Context)
    function render(){
        if(cartItems.length === 0){
            return <Link to="/cart"><i className='ri-shopping-cart-line ri-fw ri-2x'></i></Link>
        }else if(cartItems.length > 0){
            return <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i></Link>
        }
    }

  return (
    <header>
        <Link to="/"><h2>Pictures Perfect Unsplash</h2></Link>
        {render()}
    </header>
  )
}

export default Header