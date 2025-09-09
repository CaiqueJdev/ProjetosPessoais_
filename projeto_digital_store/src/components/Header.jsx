import Logo from "../components/Logo";
import { Button } from 'primereact/button';
import cart from '/src/assets/mini-cart.svg'
import HeaderLogo from "../assets/logo-headers.svg"
const Header = () => {
    return ( 
        <>
            <header className="w-full">
                <div id="DivHeader" className="flex flex-col max-w-[1080px] m-auto p-3">
                    <div id="DivHeader" className="flex flex-start items-center justify-between">
                        {/* Logo */}
                        <div id="Logo" className="flex grow-2">
                            <Logo Images={HeaderLogo}/>
                        </div>
                        {/* Pesquisa */}
                        <div id="Pesquisa" className="grow-6 flex m-3">
                            <input type="text" placeholder="Pesquisar produto..." className="bg-p5 h-8 w-[100%] rounded-[5px] px-3"/>
                        </div>
                        {/* Buttons 1*/}
                        <nav id="Buttons" className="flex items-center justify-around grow-4">
                            <a href="" className="border-b text-p1 nowrap">Cadastre-se</a>
                            <button className="bg-b1 w-[114px] h-[40px] rounded-[9px] font-bold text-white text-[14px] ">Entrar</button>
                            <img src={cart} alt="" className="flex m-4"/>
                        </nav>
                    </div>
                    {/* Navegação */}
                    <nav>
                        <ul className="flex gap-8 py-2 ">
                            <li><a href="">Home</a></li>
                            <li><a href="">Produtos</a></li>
                            <li><a href="">Categorias</a></li>
                            <li><a href="">Meus Pedidos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
     );
}
 
export default Header;