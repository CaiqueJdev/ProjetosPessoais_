const Informations = ({title,informations}) => {
    return ( 
        <div className="flex flex-col gap-6">
            <p className="text-sm text-w1">{title}</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-1">
                {informations.map((info,index) => (
                    <li key={index} className="mb-2">
                        <a href={info.link}>
                            {info.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Informations;