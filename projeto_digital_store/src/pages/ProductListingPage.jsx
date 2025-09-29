import Section from "../components/Section"
import ProductListing from "../components/ProductListing";
import Img from "../assets/tenis nike.png";

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
     {
        name:"Tenis Nike",
        image: Img,
        price:200,
        priceDiscount:149.9
    },
];

const ProductListingPage = () => {
    return ( 
        <>
            <Section
                title={"Resultados Para"}
            >
                <div className="flex flex-row bg-">
                    <div className="w-[308px]">
                            <ul>
                                <li>
                                    <input type="checkbox" name="Adidas" id="" />
                                        Adidas
                                </li>
                            </ul>
                        <ul>
                            <li>
                                <input type="checkbox" name="Adidas" id="" />
                                    Calenciaga
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <input type="checkbox" name="Adidas" id="" />
                                    K-Swiss
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="checkbox" name="Adidas" id="" />
                                    Nike
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="checkbox" name="Adidas" id="" />
                                    Puma
                            </li>
                        </ul>
                    </div>
                    <Section>
                        <ProductListing products = {productArray}/>
                    </Section>
                </div>
            </Section>
        </>
     );
}
 
export default ProductListingPage;