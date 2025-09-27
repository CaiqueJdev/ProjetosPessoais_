import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Img from "../assets/tenis nike.png";
import ProductListing from "../components/ProductListing";
import Hero from "../components/Hero";
import YellowNike from "../assets/yellowNike.png"
const productArray = [
    {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
];
const HomePage = () => {
    return ( 
        <>
            <Hero/>
            <Section
                title={"Produtos em destaque"}
                link={{text:"Ver todos ->", href: "/produtos"}}
                bg={"#F9F8FE"}
                // titleAlign="center" 
            >
                <div className="m-auto flex justify-center">
                    <ProductListing products = {productArray} />
                </div>
                <Section
                    title={"Colecoes em Destaque"}
                    titleAlign="center"
                >
                    <ul className="flex gap-6 p-1 bg-">
                        <li><a href="">Camisetas</a></li>
                        <li><a href="">Calcas</a></li>
                        <li><a href="">Bones</a></li>
                        <li><a href="">Headphones</a></li>
                        <li><a href="">Tenis</a></li>
                    </ul>

                </Section>
            </Section>
            <Section>
                <div className="flex w-full p-1">
                    {/* Imagens */}
                    <div className="flex relative w-full h-full flex-5 justify-center items-center">
                        <img src={YellowNike} alt="YellowNike" className="z-1 w-full"/>
                        <div className="absolute w-[80%] h-[80%] rounded-t-full bg-linear-to-t from-t1 to-t0"></div>
                    </div>
                    {/* Textos */}
                    <div className="flex-7 p-5">
                        <h2 className="text-[14px]">
                            Oferta especial
                            </h2>
                        <h3 className="text-[48px] leading-[50px] font-bold">
                            Air Jordan edição de colecionador
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aut! Ipsum consequatur accusamus enim officia, incidunt, impedit sed aperiam fuga nesciunt eius quidem suscipit beatae illum doloribus assumenda. Commodi, dolorem.
                        </p>
                        <button className="btHeader bg-b1 w-[114px] h-[40px] rounded-[9px] font-bold text-white text-[14px]
                        ">Entrar</button>
                    </div>
                </div>
            </Section>
                
        </>
              
     );
}
 

export default HomePage;