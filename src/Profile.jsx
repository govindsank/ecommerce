import React, { memo, useContext } from 'react'
import { Toaster } from "react-hot-toast";
import { GlobalContext } from "./context";
import "./profile.css";

function Profile() {
    const { getGlobal: {isLoggedin, image,username,type},setGlobal } = useContext(GlobalContext);
  return (
    <div className='container-fluid'>
  
        <Toaster position="top-center" />
        <h3>Profile {type}</h3>
     
        <div className='row'>
          <div className='col-4 profilediv'>
             <p> Welcome<br/> {username}</p>
          </div>
          <div className='col-4'><h2>Cart</h2></div>
          <div className='col-4'>ff</div>
        </div>

    </div>
  )
}

export default memo(Profile);