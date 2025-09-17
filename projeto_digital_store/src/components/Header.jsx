import Logo from "../components/Logo";
import { Button } from 'primereact/button';
import cart from '/src/assets/mini-cart.svg';
import HeaderLogo from "../assets/logo-headers.svg";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
    header{
        & nav ul{
            & li a {
                transition: .3s;
                &:hover, &.active{
                    color: #C92071;
                }
            }
        }
    }
`

const Header = () => {
    return ( 
        <>
        <HeaderStyle>
            <header className="w-full bg-p7">
                <div id="DivHeader" className="flex flex-col p-3 max-w-[1280px] m-auto">
                    <div id="DivHeader" className="flex flex-start items-center justify-between">
                        {/* Logo */}
                        <div id="Logo" className="flex grow-2">
                            <Logo Images={HeaderLogo}/>
                        </div>
                        {/* Pesquisa */}
                        <div id="Pesquisa" className="grow-6 flex m-3">
                            <IconField iconPosition="right">
                                <InputIcon
                                    className="pi pi-search"
                                />
                                <input type="text" placeholder="Pesquisar produto..." className="bg-p5 h-8 w-[100%] rounded-[5px] px-3"/>
                            </IconField>
                        </div>
                        {/* Buttons 1*/}
                        <nav id="Buttons" className="flex items-center gap-5 grow-4">
                            <a href="" className="border-b text-p1 nowrap">Cadastre-se</a>
                            <button className="bg-b1 w-[114px] h-[40px] rounded-[9px] font-bold text-white text-[14px] ">Entrar</button>
                        </nav>
                            <img src={cart} alt="" className="flex "/>
                    </div>
                    {/* Navegação */}
                    <nav>
                        <ul className="flex gap-8 py-2 ">
                            <li>
                                <NavLink to={"/HomePage"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Produtos"}>Produtos</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Categorias"}>Categorias</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/MeusPedidos"}>Meu Pedidos</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </HeaderStyle>
        </>
     );
}
 
export default Header;