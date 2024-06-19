'use client'
import React from "react";
import { useEffect } from 'react';
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import  Link  from "next/link";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../database/firebase";
import { useRouter } from 'next/navigation';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const router = useRouter();
  const handleAuthenticaton = () => {
    if (user) {

      dispatch({
        type: 'SIGN_OUT'
      });

      auth.signOut();
      console.log(auth.signOut());
    }
  }

  return (
    <div className="header" style={{ paddingBottom:"0.9rem"}}>
      <div>
      <Link href="/">
        <img
          className="header__logo"
          src="../image/oklao-headerlogo.png"
        />
      </Link>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div   className="header__nav">

      {user  
      ? (
          <div className="header__option">
            <span className="header__optionLineOne">Hello, {user.email}</span>
            <span onClick={handleAuthenticaton} className="header__optionLineTwo">Sign Out</span>
          </div>
        ) : (
          <Link href="/login"> 
            <div className="header__option">
              <span className="header__optionLineOne">Sign In</span>
              <span className="header__optionLineTwo">Account</span>
            </div>
          </Link>
        )}
       

        <Link href='/order'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns &</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        



        <Link href="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketOutlinedIcon  />
           
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
