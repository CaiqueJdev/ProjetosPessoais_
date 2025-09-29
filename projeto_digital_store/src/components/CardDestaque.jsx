const CardDestaque = ({imgDestaque,bg}) => {
    return ( 
        <>
            <div 
                className="relative"
                style={{backgroundColor: `${bg}`}}
            >
                
                <img
                    src={imgDestaque}
                    alt="collection1"
                    className="rounded-sm"
                />
                <p className="absolute bg-[#E7FF86] px-3 py-1 top-3 left-7 rounded-full">
                    30% off
                </p>
                <button className="absolute bottom-4 left-6 bg-w1 w-[153px] h-[48px] rounded-[9px] font-bold text-b2 text-[14px]">
                    Compre Aqui
                </button>
                
            </div>
        </>
     );
}
 
export default CardDestaque;