const Section = ({title, titleAlign='left',link,children}) => {
    const titleAlignclass = titleAlign === 'center' ? 'text-center' : 'text-left';
    return ( 
        <>
            <section className="w-full">
                <div className="max-w-[1440px] p-3">
                    <div>
                        <h2>{title}</h2>
                        {link && (
                            <a href={link.href}>
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