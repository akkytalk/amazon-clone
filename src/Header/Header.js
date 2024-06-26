import { Search, ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { useStateValue } from '../store/StateProvider'

import './Header.css'

function Header() {

    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        auth.signOut()
        history.push("/")
    }

    const amazon = () => {
        dispatch({
            type:"SET_AUTH_REDIRECT_PATH",
            path:"/"
        })
    }

    return (
        <div className="header">
            <Link to="/">
            <img className="header-logo" onClick={amazon} src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header-search" >
               <input className="header-search-input" type="text" />
               <Search className="header-search-icon" />
            </div>
            <div className="header-nav">
                <Link to={!user && "/login"}>
              <div onClick={handleAuthentication} className="header-options"> 
              <span className="header-options-lineone">Hello {user?.email || 'Guest'}</span>
              <span className="header-options-linetwo">{user? 'Sign Out' :'Sign In'}</span>
              </div>
              </Link>

               <Link to="/orders">   
              <div className="header-options"> 
              <span className="header-options-lineone">Returns</span>
              <span className="header-options-linetwo">& orders</span>
              </div>
              </Link>

              <div className="header-options"> 
              <span className="header-options-lineone">Your</span>
              <span className="header-options-linetwo">Prime</span>
              </div>
              <Link to="/checkout">
              <div class="header-options-basket">
                   <ShoppingBasket />
    <span className="header-options-linetwo header-basket-count">{basket?.length}</span>
                   </div>
                   </Link>
             </div>
        </div>
    )
}

export default Header
