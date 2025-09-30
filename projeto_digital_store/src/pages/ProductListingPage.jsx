import Section from "../components/Section"
import ProductListing from "../components/ProductListing";
import Img from "../assets/tenis nike.png";
import FilterGroup from "../components/FilterGroup";


const productArray = [
    
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

const arrayOptions = [
    { text: "Opção 1", value: "opt1" },
    { text: "Opção 2" },
    { text: "Opção 3", value: "opt3" },
    { text: "Opção 4" }
]

const ProductListingPage = () => {
    return ( 
        <>
            <Section
                title={"Resultados Para"}
            >
                <div className="flex flex-row bg-">
                    <div className="w-[308px]">
                        <FilterGroup
                            title={"categorias"}
                            inputType="checkbox"
                            options={arrayOptions}
                        />
                        <FilterGroup
                            title={"categorias"}
                            inputType="checkbox"
                            options={arrayOptions}
                        />
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