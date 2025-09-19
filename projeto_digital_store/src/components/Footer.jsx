import Logo from "./Logo";
import FooterLogo from "../assets/logo-footer.svg";
import Informations from "./Informations";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
const Footer = () => {
    {{/* Arrays titulos */}}

     const informacao=[
           {text:"Sobre Drip Store", link: ""},
           {text:"Segurança", link: ""},
           {text:"Wishlist", link: ""},
           {text:"Blog", link: ""},
           {text:"Trabalhe conosco", link: ""},
           {text:"Meus pedidos", link: ""},
       ]
       const categorias=[
           {text:"Camisetas", link: ""},
           {text:"Calças", link: ""},
           {text:"Bonés", link: ""},
           {text:"Headphones", link: ""},
           {text:"Tênis", link: ""}
       ]
       const contato=[
           {text:"Av.Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: ""},
           {text:"(85) 3051 3411", link: ""},
       ] 
       
    return ( 
        <>
        <footer className="w-full bg-p0 text-p4 text-base">
            <div id="DivFooter"
             className="max-w-[1280px] flex flex-row p-3 m-auto"
            >
                {/* Digital Store */}
                <div className="flex flex-col gap-6 grow-4 basis-[500px]">
                    <Logo Images={FooterLogo}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/?locale=pt_BR">
                            <img src={facebook} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src={instagram} alt=""/>
                        </a>
                        <a href="https://x.com/?lang=pt">
                            <img src={twitter} alt="" />
                        </a>
                    </div>
                </div>
                {/* Informacoes */}
                <div className="flex gap-6 grow-8 ">
                    <Informations
                        title={"Informações"}
                        informations={informacao}
                    />
                    <Informations
                        title={"Categorias"}
                        informations={categorias}
                    />
                    <Informations
                        title={"Contato"}
                        informations={contato}
                    />
                </div>
            </div>
            {/* Direitos */}
            <div>
                <hr className="border-p2 "/>
                <p className="text-center p-5 text-da">
                    2025 @Digital Store
                </p>
            </div>
        </footer>
        </> 
    );
}
 
export default Footer;