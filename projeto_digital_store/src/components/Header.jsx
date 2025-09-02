import Logo from "../components/Logo";
const Header = () => {
    return ( 
        <>
            <header>
                <div id="DivHeader" className="flex w-full bg-b5">
                    <div id="Logo">
                    <Logo/>
                    </div>
                    <nav id="Pesquisa">
                        <input type="text" />
                    </nav>
                    <div id="Buttons">
                        <a href="">Cadastre-se</a>
                        <button>Entrar</button>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;