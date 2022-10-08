import React, { useState } from "react"
import {Link} from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs"
import { MdShoppingCart } from "react-icons/md"
import { FaTachometerAlt } from "react-icons/fa"


function Navbar() {

const [login, setLogin] = useState(false);


    return (
      <nav className="navbarHeader">
        <div className="productAdminHead">
          <Link className="navLefthead" to="./home">
            <h2 className="headerLeftProduct">Product Admin</h2>
          </Link>
        </div>
        <div className="menuItems">
          <ul className="navRight">
            <li className="navItemHeader">
              <Link to="/Dashboard" className="navLink">
                < FaTachometerAlt className="icon" />
                Dashboard

              </Link>
  
  
            </li>
            <li className="navItemHeader">
              <Link to="/Product" className="navLink"  >
                <MdShoppingCart className="icon" />
                Products
              </Link>
            </li>
  
            <li className="navItemHeader">
              <Link to="/Account" className="navLink" >
                <BsFillPersonFill className="icon" />
                Accounts
              </Link>
            </li>
        
          <div className="navItemHeader">
            <h5 className="nav-right">{login ? "LOGOUT": "LOGIN,Admin"}</h5>
        </div>
        </ul>
        </div>
      </nav>
  
    )
  }
  
  export default Navbar