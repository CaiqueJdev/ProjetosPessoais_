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
                        className="flex jus"
                    >
                        <img 
                            src={collection1} 
                            alt="collection1" 
                            className="rounded-sm"
                            />
                        <button className="bg-b1 w-[114px] h-[40px] rounded-[9px] font-bold text-white text-[14px]">
                            
                        </button>
                        <img src={collection2} alt="collection2" />
                        <img src={collection3} alt="collection3" />
                    </div>
                </Section>
                
            </Section>

            <Section>
                <div className="flex">
                    <div className="flex-5">
                        <img src={YellowNike} alt="" />
                    </div>
                    <div className="flex-7">
                        <h2>
                            Ofertas especial
                            </h2>
                        <h1>air Jordan edicao de colecionador</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, quaerat corrupti hic, maxime omnis minima qui error excepturi quia voluptatum labore, exercitationem id. Impedit quos, ratione excepturi harum expedita modi!</p>
                    </div>
                </div>
            </Section>
        </>
              
     );
}
 

export default HomePage;