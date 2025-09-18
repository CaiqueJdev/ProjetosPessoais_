import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import Found from "../components/Found";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/Produtos" element={""}/>
                    <Route path="/Categorias" element={""}/>
                    <Route path="/MeusPedidos" element={""}/>
                </Route>
                <Route path="*" element={<Found/>}/>
            </Routes>    
        </BrowserRouter>
     );
}
 
export default Paths;