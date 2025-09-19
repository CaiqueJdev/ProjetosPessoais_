const Hero = () => {
    return ( 
        <>
            <section id="Hero" className="w-full items-center justify-center">
                <div className="m-auto flex max-w-[1280px] p-3 justify-between h-[90vh] items-center">
                    <div className="flex-1 space-y-[20px]">
                        <h3 
                        className="font-bold text-[#F6AA1C]"
                        >
                            Melhores ofertas personalizadas
                        </h3>
                        <h1 className="font-extrabold text-[64px] leading-[68px] space-y-[1px] ">
                            Queima de estoque Nike
                        </h1>
                        <p className="text-p2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, neque ducimus in unde laborum voluptatibus natus vero reiciendis.
                        </p>
                        <button className="bg-b1 w-[114px] h-[40px] rounded-[9px] font-bold text-white text-[14px]">
                            Ver Ofertas
                        </button>
                    </div>
                    <div className="flex justify-center items-center flex-1">
                        a
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;