import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Hero from "../components/Hero";
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
                        className="flex gap-1"
                    >
                        <div className="relative">
                            <img
                                src={collection1}
                                alt="collection1"
                                className="rounded-sm w-full h-auto"
                                />
                            <button 
                                className="absolute bottom-7 left-6  bg-b1 w-[153px] h-[48px] rounded-[9px] font-bold text-white text-[14px]"
                            >
                                compre aqui
                            </button>
                            <h6 className="absolute bg-p0 text-w1 top-4 left-7 p-1 rounded-full">30% SALE</h6> 
                        </div>
                            
                        <img src={collection2} alt="collection2" />
                        <img src={collection3} alt="collection3" />
                    </div>
                </Section>
                
            </Section>
                
        </>
              
     );
}
 

export default HomePage;