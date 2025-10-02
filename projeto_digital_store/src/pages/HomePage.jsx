import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Hero from "../components/Hero";
import YellowNike from "../assets/yellowNike.png";
import Img from "../assets/tenis nike.png";
import collection1 from "../assets/collection-1.png"
import collection2 from "../assets/collection-2.png"
import collection3 from "../assets/collection-3.png"
import Button from "../components/Elements";
import CardDestaque from "../components/CardDestaque";
import iconCamiseta from "../assets/icon-camiseta.png"
import iconCalca from "../assets/icon-calca.png"
import iconHeadfone from "../assets/icon-headfone.png"
import iconTenis from "../assets/icon-tenis.png"
import Iconedestaque from "../components/Iconedestaque";

const productArray = [
    {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    }

];

function repeatCard(){
    for(let i = 0; i < 10; i++){
        productArray.push(
            {
                name:"Tenis Nike",
                image: Img,
                price:200,
                priceDiscount:149.9
            },)}
}
repeatCard()


const HomePage = () => {
    return ( 
        <>
            <Hero/>
                <Section
                    title={"Colecoes em Destaque"}
                    bg={"#F9F8FE"}
                >
                    <div 
                        id="colection-container"
                        className="flex flex-col gap-1 lg:flex-row lg:justify-center"
                        
                     >
                        <CardDestaque imgDestaque={collection1}/>
                        <CardDestaque imgDestaque={collection2}/>
                        <CardDestaque imgDestaque={collection3}/>
                    </div>
                </Section>
                
                <Section 
                    title={"Colecoes em Destaque"}
                    titleAlign={"center"}
                    bg={"#F9F8FE"}
                >
                    <div className="flex flex-wrap gap-6">
                        <Iconedestaque title={"Camiseta"} iconimage={iconCamiseta} />
                        <Iconedestaque title={"Calcas"} iconimage={iconCalca}/>
                        <Iconedestaque title={"Bones"} iconimage={iconCalca}/>
                        <Iconedestaque title={"Headphones"} iconimage={iconHeadfone}/>
                        <Iconedestaque title={"Tenis"} iconimage={iconTenis}/>
                        
                    </div>
                </Section>
            {/* Produtos em alta */}
            <Section
                title={"Produtos em destaque"}
                link={{text:"Ver todos ->", href: "/produtos"}}
                bg={"#F9F8FE"}
                
            >
                <div className="m-auto flex justify-center">
                    <ProductListing products = {productArray} />
                </div>
            </Section>

            <Section>
                <div className="flex max-lg:flex-col">
                    <div className="flex-5 relative flex">
                        <img src={YellowNike} alt="" className="z-10 "/>
                        <div 
                            className="absolute bg-linear-to-t from-transparent to-t0 w-full h-full rounded-t-full"
                        ></div>
                    </div>
                    <div className="flex-7 flex items-center justify-center max-lg:text-center">
                        <div className="flex flex-col gap-3 p-5">
                            <h2 className="text-[14px] font-bold leading-[22px] text-b2">
                                Ofertas especial
                            </h2>
                            <h1 className="font-bold text-[48px] leading-[50px]">
                                Air Jordan edicao de colecionado
                            </h1>
                            <p className="text-[16px] leading-[28px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, quaerat corrupti hic, maxime omnis minima qui error excepturi quia voluptatum labore, exercitationem id. Impedit quos, ratione excepturi harum expedita modi!
                            </p>
                            <div><Button text={"Oferta Especial"}/></div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
              
     );
}
 

export default HomePage;