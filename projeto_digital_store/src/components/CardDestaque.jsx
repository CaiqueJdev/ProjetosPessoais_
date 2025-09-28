const CardDestaque = ({imgDestaque}) => {
    return ( 
        <>
            <div className="relative">
                <img
                    src={imgDestaque}
                    alt="collection1"
                    className="rounded-sm"
                />
                <p className="absolute bg-[#E7FF86] px-2 py-1 top-4 left-7 rounded-full">
                    30% Sale
                </p>
                <button className="absolute bottom-4 left-6 bg-w1 w-[153px] h-[48px] rounded-[9px] font-bold text-b2 text-[14px]">
                    Compre Aqui
                </button>
                
            </div>
        </>
     );
}
 
export default CardDestaque;