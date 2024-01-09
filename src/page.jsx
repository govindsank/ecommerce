import { BrowserRouter, Routes, Route } from "react-router-dom";
import MW from "./middleware/middleware";
import React, { Suspense, useEffect, useState } from 'react';
import { getProfile } from "./helpers/request";
import config from "./config";
import { GlobalContext } from './context';
// import config from './config';
import Loading from './components/Loading';
import Body from "./components/Body"
import Home from "./home";
import Nav from "./nav";
import Mobile from "./mobile";
import Laptop from "./Laptop";
import Register from "./register";
import Login from "./login";
import Profile from "./Profile";
import SProfile from "./sellerprofile";
import { Auth } from "./middleware/auth";
import { addProducts } from "./helpers/request";
// import Upload from "./upload"

config();
function App(){
    const token = localStorage.getItem("token");
    const [getGlobal, setGlobal] = useState({
      isLoggedin: false,
      username: null,
      type: null,
      phone: null,
      image: null,
      email: null
    });
    useEffect(() => {
      if (token) {
        getProfile(token)
        .then(res => {
          setGlobal({
            isLoggedin: true,
            username: res.data.user.username,
            type: res.data.user.type,
            phone: res.data.user.phone,
            image: res.data.user.image,
            email: res.data.user.email
          });
        })
      }
    }, [token]);
    return(
        <GlobalContext.Provider value={{ getGlobal, setGlobal }}>
        <BrowserRouter>
        <Nav />
        <Body >
        <Suspense fallback={<Loading />}>
        <Routes>
        <Route index element={<Home />}/>
        <Route path="/mobile" element={<Mobile />}/>
        <Route path="/laptop" element={<Laptop />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Profile" element={<Auth><Profile /></Auth>}/>
        <Route path="/sprofile"element={<Auth><SProfile/></Auth>}/>
        {/* <Route path="/upoad" element={<Auth><</Auth>} */}
        </Routes>
        </Suspense>
        </Body>
        
        </BrowserRouter>
        </GlobalContext.Provider>
    );
}
export default App