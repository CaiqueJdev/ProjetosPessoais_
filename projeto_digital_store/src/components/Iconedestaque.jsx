const Iconedestaque = ({iconimage,title,link,}) => {
    return ( 
        <div 
            className="flex flex-col gap-3 justify-center"
            
         >
            <div
                className="flex justify-center items-center bg-w1 w-[104px] h-[104px] rounded-50"
            >
                <a href={link}><img src={iconimage} alt="iconimage" /></a>
                
            </div>
            <p className="text-center text-p1 text-base font-bold">{title}</p>
        </div>
     );
}
 
export default Iconedestaque;