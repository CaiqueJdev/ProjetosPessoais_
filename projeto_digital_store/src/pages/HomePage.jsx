import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Img from "../assets/tenis nike.png";
import ProductListing from "../components/ProductListing";
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
            <Section
                title={""}
            >
                
            </Section>
            <Section
                title={"Produtos"}
                link={{text:"Ver todos ->", href: "/produtos"}}
                // titleAlign="center" 
                >
                    <div className="m-auto w-[1280px]">
                        <ProductListing products = {productArray} />
                    </div>
            </Section>
                
        </>
              
     );
}
 

export default HomePage;