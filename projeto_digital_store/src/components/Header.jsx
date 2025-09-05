import Logo from "../components/Logo";
import { Button } from 'primereact/button';

const Header = () => {
    return ( 
        <>
            <header>
                <div id="DivHeader" className="flex items-center justify-around max-w-[1080px] m-auto p-3">
                    {/* Logo */}
                    <div id="Logo">
                    <Logo/>
                    </div>
                    {/* Pesquisa */}
                    <div id="Pesquisa" className="">
                        <input type="text" className="bg-p5 h-8 w-[100%] rounded-[5px]"/>
                    </div>
                    {/* Buttons */}
                    <nav id="Buttons" className="flex items-center ">
                        <a href="" className="text-b1">Cadastre-se</a>
                        <Button label="Entrar" className="" style={{backgroundColor:"#C92071"}}/>
                        <img src="" alt="" />
                    </nav>
                </div>
            </header>
        </>
     );
}
 
export default Header;