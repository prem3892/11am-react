
import {NavLink} from 'react-router-dom';

import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { handleLogOut } from '../redux/auth.slice';
function Header() {

  const {authenticated} =  useSelector(state=>state.authSlice);
  const dispatch  =  useDispatch()


  function handleLog(){
    dispatch(handleLogOut(null))
  }

  
  return (
    <div className="navbar bg-slate-950 text-white shadow-sm ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <NavLink to="/dashboard" className="btn btn-ghost text-xl">Dashboard</NavLink>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><NavLink to="/">home</NavLink></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">



            {
              authenticated !==null ?   <button className="btn bg-red-500" onClick={handleLog}>Logout</button>: 
              
              <NavLink to="/login" className="btn">Login</NavLink>
            }
        
     

       
      
    </div>
  </div>
  )
}

export default Header