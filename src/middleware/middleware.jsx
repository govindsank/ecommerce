import { Navigate } from "react-router-dom";
function MW({children}){
    let token=localStorage.getItem("token");

    if(token){
        return children;
    }
    return <Navigate to={"/"}/>
}
export default MW;