import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
             <nav className="nav">
                
                <ul>
                <li style={{float:"left",paddingRight:"650px",fontSize:"25px"}}>    
                         PickUp Rider
                      </li>
                      <li >
                          
                      <Link style={{textDecoration:"none"}} to="/home"> Home</Link>
                      </li>
                      
                      <li>
                          <Link style={{textDecoration:"none"}} to="/destination">Destination</Link>
                      </li>
                      <li>
                      <Link style={{textDecoration:"none"}} to="/blog">Blog</Link>
                      </li>
                      <li>
                      <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
                      </li>
                      <li>
                      <Link  style={{textDecoration:"none"}} to="/login" class="btn btn-warning" >Login</Link>
                      </li>
                      
                  </ul>
                
              </nav>
        </div>
    );
};

export default Header;