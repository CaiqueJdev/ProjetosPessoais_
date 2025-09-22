import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Img from "../assets/tenis nike.png";
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
                
        </>
              
     );
}
 

export default HomePage;