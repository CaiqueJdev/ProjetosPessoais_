const Section = ({title, titleAlign= 'left', link, children}) => {

    const titleAlignclass = titleAlign === 'center' ? 'text-center' : 'text-left';
    if (titleAlign === 'center') {
        return (
      <section 
        className="w-full"
        >
        <div 
            className="max-w-[1440px] p-3 mx-auto"
        >
          <div 
            className="flex justify-center "
            >
            <h2 
                className=""
              >
              {title}
            </h2>
          </div>
          <div>
            {children}
          </div>
        </div>
      </section>
    );

  }
    return ( 
        <>
            <section className="w-full">
                <div className="mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className={`${titleAlignclass}`}>{title}</h2>
                        {link && (
                            <a 
                            href={link.href}
                            className=""
                            >
                                {link.text}
                            </a>
                        )}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </section>
            
        </>
     );
}
 
export default Section;