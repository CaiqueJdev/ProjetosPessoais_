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

            {/* Produtos em alta */}
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
                >
                    <div 
                        id="colection-container"
                        className="flex flex-col gap-1 md:flex-row md:justify-center"
                     >
                        <div className="relative">
                            <img
                                src={collection1}
                                alt="collection1"
                                className="rounded-sm"
                            />
                            <p className="absolute bg-w1 p-1 top-4 left-7 rounded-full">30% Sale</p>
                            <button className="absolute bottom-4 left-6 bg-b1 w-[153px] h-[48px] rounded-[9px] font-bold text-white text-[14px]">
                               Compre Aqui
                            </button>
                            
                        </div>
                        <div className="relative">
                            <img
                                src={collection2}
                                alt="collection1"
                                className="rounded-sm"
                            />
                            <p className="absolute bg-w1 p-1 top-4 left-7 rounded-full">30% Sale</p>
                            <button className="absolute bottom-4 left-6 bg-b1 w-[153px] h-[48px] rounded-[9px] font-bold text-white text-[14px]">
                               Compre Aqui
                            </button>
                            
                        </div>
                        <div className="relative">
                            <img
                                src={collection3}
                                alt="collection1"
                                className="rounded-sm"
                            />
                            <p className="absolute bg-w1 p-1 top-4 left-7 rounded-full">30% Sale</p>
                            <button className="absolute bottom-4 left-6 bg-b1 w-[153px] h-[48px] rounded-[9px] font-bold text-white text-[14px]">
                               Compre Aqui
                            </button>
                            
                        </div>
                    </div>
                </Section>
                
            </Section>

            <Section>
                <div className="flex max-lg:flex-col">
                    <div className="flex-5 relative flex">
                        <img src={YellowNike} alt="" className="z-10 "/>
                        <div 
                            className="absolute bg-linear-to-t from-transparent to-t0 w-full h-full rounded-t-full"
                        ></div>
                    </div>
                    <div className="flex-7 grid place-items-center">
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
                            <Button text={"Oferta Especial"}/>
                        </div>
                    </div>
                </div>
            </Section>
        </>
              
     );
}
 

export default HomePage;