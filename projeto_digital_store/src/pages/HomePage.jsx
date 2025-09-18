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
                bg={"#F5F5F5"}
            >
                <div>
                    <div>
                        <p>Melhores ofertas personalizadas</p>
                        <h1>Queima de stoque Niek</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo quibusdam aliquam facilis odit voluptatem quos doloribus accusantium voluptatibus suscipit vitae, ipsam a nesciunt dicta beatae magni. Voluptas, iusto labore!</p>
                        
                    </div>
                    <div></div>
                </div>
            </Section>

            <Section
                title={"Produtos"}
                link={{text:"Ver todos ->", href: "/produtos"}}
                bg={"#F9F8FE"}
                // titleAlign="center" 
            >
                <div className="m-auto flex justify-center">
                    <ProductListing products = {productArray} />
                </div>
            </Section>
                
        </>
              
     );
}
 

export default HomePage;