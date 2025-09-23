const Section = ({title, titleAlign= 'left', link, children, bg}) => {

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
            <section className="w-full" style={{backgroundColor: `${bg}`}}>
                <div className="mx-auto max-w-[1280px] p-3">
                    <div className="flex justify-between items-center">
                        <h2 className={`${titleAlignclass}`}>
                          {title}
                        </h2>
                        {link && (
                            <a 
                              href={link.href}
                              className="text-b2"
                            >
                                {link.text}
                            </a>
                        )}
                    </div>
                    <div className="">
                        {children}
                    </div>
                </div>
            </section>
            
        </>
     );
}
 
export default Section;