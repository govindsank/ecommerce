import React, { useContext } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import { GlobalContext } from './context';
import "./nav.css";
import "./a.css";

function Nav() {

  let { getGlobal: { isLoggedin, image,type }, setGlobal } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setGlobal({
      isLoggedin: false,
      username: null,
      phone: null,
      image: null,
      email: null
    });
    localStorage.removeItem("token");
    toast.success("Logged out!");
    navigate("/");
    if(type == "seller"){
      
    }
  }
  return (<>
    <div className='container-fluid'>
    <div className='nav-container row'>
      <Toaster position="top-center" /><div className='col-2'>  <img src="/logo.png" alt="logo" onClick={() => navigate("/")} /></div>
    
      <div className='col-2'><a href='/mobile'>Mobile</a></div><div className='col-2'><a href='/laptop'>Laptops</a></div><div className='col-2'></div> <div className='col-2'></div>     <div className='col-2'>  
      {isLoggedin ?
        <div className="right profile">
           {pathname != "/Sprofile" && <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>}
          
          <img src={image} alt="prfile" onClick={() => navigate(type == "seller" ? "/Sprofile" : "/profile")} />
          <button onClick={logoutHandler}>Logout</button>
        </div>
        :
        <div className="right buttons">
          {pathname != "/register" && <button onClick={() => navigate("/register")}>Register</button>}
          {pathname != "/login" && <button onClick={() => navigate("/login")}>Login</button>}
        </div>
      }</div>
    </div>
    </div>
    </>
  )
}

export default Nav;









// import { Link } from "react-router-dom";
// // import React, { useContext } from 'react'


// // function Nav(){
// //   let { getGlobal: {isLoggedin, image}, setGlobal } = useContext(GlobalContext);
// //   const { pathname } = useLocation();
// //   const navigate = useNavigate();
// //   const logoutHandler = () => {
// //     setGlobal({
// //       isLoggedin: false,
// //       username: null,
// //       type: null,
// //       phone: null,
// //       image: null,
// //       email: null
// //     });
// //     localStorage.removeItem("token");
// //     toast.success("Logged out!");
// //     navigate("/");
// //   }
// //     return (
// //         <>
// //         <nav class="navbar navbar-expand-lg bg-light">
// //   <div class="container-fluid">
// //     <a class="navbar-brand" href="#"><h3>Navbar</h3></a>
// //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //       <span class="navbar-toggler-icon"></span>
// //     </button>
// //     <div class="collapse navbar-collapse" id="navbarNav">
// //       <ul class="navbar-nav">
// //         <li class="nav-item">
// //           <a class="nav-link active" aria-current="page" href="/">Home</a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link"><Link to={"/mobile"}style={{textDecoration: 'none', color:'black'}}>Mobile</Link></a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link"><Link to={"/laptop"} style={{textDecoration: 'none', color:'black'}}>Laptops</Link></a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link"><Link to={"/register"} style={{textDecoration: 'none', color:'black'}}>register</Link></a>
// //         </li>
// //         {/* <li class="nav-item">
// //           <a class="nav-link" href="/laptop"></a>
// //         </li> */}
// //       </ul>
// //     </div>
// //   </div>
// // </nav>


// //         {/* <h2>NavBar</h2>
// //         <span><Link to={"/"}>Home</Link></span>
// //         <span><Link to={"/upload"}>Home</Link></span> */}
// //         </>
// //     )
// // }
// // export default Nav
// import React, { useContext } from 'react'
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate, useLocation } from "react-router-dom";

// import { GlobalContext } from './context';
// import "./nav.css";

// function Nav() {
//   let { getGlobal: {isLoggedin, image}, setGlobal } = useContext(GlobalContext);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const logoutHandler = () => {
//     setGlobal({
//       isLoggedin: false,
//       username: null,
//       type: null,
//       phone: null,
//       image: null,
//       email: null
//     });
//     localStorage.removeItem("token");
//     toast.success("Logged out!");
//     console.log(isLoggedin);
//     navigate("/");
//   }
//   return (
//   //   <div className='nav-container'>
//   //   <Toaster position="top-center" />
//   //   <img src="/logo.png" alt="logo" onClick={() => navigate("/")} />
//   //   {isLoggedin ? <div className="right profile">
//   //     <img src={image} alt="prifile" onClick={() => navigate("/profile")} />
//   //     <button onClick={logoutHandler}>Logout</button>
//   //   </div> : <div className="right buttons">
//   //     {pathname != "/register" && <button onClick={() => navigate("/register")}>Register</button>}
//   //     {pathname != "/login" && <button onClick={() => navigate("/login")}>Login</button>}
//   //   </div>}
//   // </div>
//     <nav class="navbar navbar-expand-lg bg-light">
//        <div class="container-fluid">
//     <Toaster position="top-center" />
//          <a class="navbar-brand" href="#"><h3>Navbar</h3></a>
//          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//            <span class="navbar-toggler-icon"></span>
//          </button>
//          <div class="collapse navbar-collapse" id="navbarNav">
//            <ul class="navbar-nav">
//              <li class="nav-item">
//                <a class="nav-link active" aria-current="page" href="/">Home</a>
//              </li>
//              <li class="nav-item">
//                <a class="nav-link"><Link to={"/mobile"}style={{textDecoration: 'none', color:'black'}}>Mobile</Link></a>
//              </li>
//              <li class="nav-item">
//                <a class="nav-link"><Link to={"/laptop"} style={{textDecoration: 'none', color:'black'}}>Laptops</Link></a>
//              </li>
//              <li class="nav-item">
//              {isLoggedin ? <div className="right profile">
//         <img src={image} alt="prifile" onClick={() => navigate("/profile")} />
//         <button onClick={logoutHandler}>Logout</button>
//       </div> : <div className="right buttons">{}
//         {pathname != "/register" && <button onClick={() => navigate("/register")}>Register</button>}
//         {pathname != "/login" && <button onClick={() => navigate("/login")}>Login</button>}
//       </div>}
//                {/* {pathname != "/profile" && <button onClick={() => navigate("/profile")}>profile</button>} */}
//         </li>
//              {/* <li class="nav-item">
//     //           <a class="nav-link" href="/laptop"></a>
//     //        </li> */}
//            </ul>
//          </div>
//        </div>
//      </nav>


//     // <div className='nav-container'>
//     //   <Toaster position="top-center" />
//     //   <img src="/logo.png" alt="logo" onClick={() => navigate("/")} />
//     //   {isLoggedin ? <div className="right profile">
//     //     <img src={image} alt="prifile" onClick={() => navigate("/profile")} />
//     //     <button onClick={logoutHandler}>Logout</button>
//     //   </div> : <div className="right buttons">
//     //     {pathname != "/register" && <button onClick={() => navigate("/register")}>Register</button>}
//     //     {pathname != "/login" && <button onClick={() => navigate("/login")}>Login</button>}
//     //   </div>}
//     // </div>
//   )
// }

// export default Nav;