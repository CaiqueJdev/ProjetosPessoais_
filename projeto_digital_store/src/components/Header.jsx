import Logo from "../components/Logo";
import cart from '/src/assets/mini-cart.svg';
import HeaderLogo from "../assets/logo-headers.svg";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from 'primereact/inputtext';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Elements from "./Elements";



const HeaderStyle = styled.header`
    header{
        & nav ul{
            & li a {
                transition: .1s;
                &:hover, &.active{
                    color: #C92071;
                    font-weight: bolder;
                    border-bottom: 2px solid ;
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
                <div id="DivHeader" className="flex flex-col px-3 pt-3 max-w-[1280px] m-auto">
                    <div className="flex flex-start items-center justify-between pt-3">
                        {/* Logo */}
                        <div id="Logo" className="grow-2">
                            <Logo Images={HeaderLogo}/>
                        </div>
                        {/* Pesquisa */}
                        <div 
                        id="Pesquisa" 
                        className="grow-6 h-max"
                        >
                            <IconField 
                                iconPosition="right" 
                                className="relative h-auto"
                            >
                                <InputIcon
                                    className="pi pi-search"
                                />
                                <InputText 
                                    className="w-full"
                                    style={{backgroundColor:'##474747'}}
                                />
                            </IconField>
                        </div>
                        {/* Buttons 1*/}
                        <nav id="Buttons" className="flex items-center gap-5 grow-4 justify-center">
                            <a href="" className="border-b text-p1 nowrap">Cadastre-se</a>
                            <Elements text={"Entrar"}/>
                        </nav>
                            <img src={cart} alt="" className="flex mx-2"/>
                    </div>
                    {/* Navegação */}
                    <nav className="max-md:hidden py-3">
                        <ul className="flex gap-8 py-3 ">
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
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