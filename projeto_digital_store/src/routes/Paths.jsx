import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>    
        </BrowserRouter>
     );
}
 
export default Paths;