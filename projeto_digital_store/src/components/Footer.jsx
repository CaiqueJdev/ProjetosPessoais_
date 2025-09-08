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
        <footer className="w-full bg-p0 text-p4 text-xs ">
            <div id="DivFooter" 
                className="max-w-[1080px] flex flex-row p-3 justify-center m-auto"
                >
                <div className="flex flex-col gap-6">
                    <Logo Images={FooterLogo}/>
                    <p>Lorem, ipsum dolor sit amet consectoetur adipisicing elit. Delectus, voluptas <br />rerum accusamus incidunt rem placeat temporibus, nam cum eum repudiandae, quos est nisi laboriosam non accusantium</p>
                    <div className="flex gap-6">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        
                    </div>
                </div>
                    <div className="flex flex-row gap-6 ">
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
                <hr className="border-p2 "/>
                <p className="text-center p-5 ts">2025 @Digital Store</p>
        </footer>
        </> 
    );
}
 
export default Footer;