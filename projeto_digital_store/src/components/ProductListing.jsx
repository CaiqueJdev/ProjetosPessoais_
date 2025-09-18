import ProductCard from "./ProductCard";

const ProductListing = ({products}) => {
    return ( 
        <>
        <div className="flex md:flex-wrap justify-between flex-wrap gap-2">
            {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />

            ))}
        </div>
        
        </>
     );
}
 
export default ProductListing;