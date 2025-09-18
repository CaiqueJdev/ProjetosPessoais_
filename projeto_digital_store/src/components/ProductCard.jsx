const ProductCard = ({image, name, price, priceDiscount}) => {
    return ( 
        <>
            <div className="w-[292px] h-[321px] rounded-lg p-4 flex flex-col items-center shadow-sm">
                {/* Imagem do produto */}
                <div className="bg-p7 p-3 h-full">
                    <img
                        src={image}
                        alt={name}
                        className="w-auto -rotate-30"
                    />
                </div>

                {/* Nome do produto */}
                <h3 
                    className="mt-2 text-lg font-semibold text-dark-gray-2 "
                >
                    {name}
                </h3>
                {/* Preco e preco com desconto */}
                <div className="flex items-center gap-2 mt-1">
                    {priceDiscount ? (
                    <>
                        {/* Preco antigo riscado */}
                        <span className="text-light-gray line-through text-lg">{price}</span>
                        {/* Preco com desconto */}
                        <span className="text-dark-gray-2 text-xl font-bold">
                        {priceDiscount}
                        </span>
                    </>
                    ) : (
                    <span className="text-dark-gray-2 text-xl font-bold">{price}</span>
                    )}
                </div>
            </div>            
        </>
     )
}
 
export default ProductCard;