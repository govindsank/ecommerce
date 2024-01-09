import React, { memo, useContext } from 'react'
import { Toaster } from "react-hot-toast";
import { GlobalContext } from "./context";
import "./profile.css";

function SProfile() {
    const { getGlobal: {isLoggedin, image,username,type},setGlobal } = useContext(GlobalContext);
  return (
    <div className='container-fluid'>
  
        <Toaster position="top-center" />
        <div className='row'>   
             <div className='col-6'>
                <h3>Profile seller</h3>
              </div>
              <div className='col-3'><button type="button" class="btn btn-light" onClick={() => navigate("/upload")}>Upload</button></div>
        </div>
     
        <div className='row'>
          <div className='col-4 profilediv'>
             <p> Welcome<br/> {username}</p>
          </div>
          <div className='col-4'>hi</div>
          <div className='col-4'>ff</div>
        </div>

    </div>
  )
}

export default memo(SProfile);