import { Outlet } from "react-router-dom";

import Footer from "../components/Pages/Shared/Footer/Footer";
import NavBar from "../components/Pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
        <div className="min-h-[80vh]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;