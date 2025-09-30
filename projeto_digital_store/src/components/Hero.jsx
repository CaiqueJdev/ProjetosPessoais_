import Button from "./Elements";
import Gallery from "./Gallery";

const imagens = [
    {src: "src/assets/heroNike.png"},
    {src: "src/assets/heroNike.png"},
    {src: "src/assets/heroNike.png"},
    {src: "src/assets/heroNike.png"},
]

const Hero = () => {
    return ( 
        <>
            <section id="Hero" className="w-full items-center justify-center bg-p5 flex max-md:py-6">
                <div className="m-auto flex max-w-[1280px] p-3 justify-between h-[90vh] items-center max-lg:flex-col max-lg:text-center">
                    <div className="flex-5 space-y-[20px] max-lg:order-1">
                        <h3 className="font-bold text-[#F6AA1C]">
                            Melhores ofertas personalizadas
                        </h3>
                        <h1 className="font-extrabold text-[64px] leading-[68px] space-y-[1px] ">
                            Queima de estoque Nike
                        </h1>
                        <p className="text-p2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. aimilique, neque ducimus in unde laborum voluptatibus natus vero reiciendis.
                        </p>
                        <Button text={"Ver Ofertas"}/>
                    </div>
                    <div className="flex justify-center items-center flex-7">
                        <Gallery
                            width="100%"
                            height="100%"
                            radius="-20deg"
                            images={imagens}
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;