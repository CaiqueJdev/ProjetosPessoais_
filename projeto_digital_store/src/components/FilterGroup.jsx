const FilterGroup = ({title, inputType = `checkbox`, options = []}) => {
    return ( 
        <>
            <div className="space-y-4">
                <h3 className="text-[14px] text-dark-gray-2">{title}</h3>

                <div className="flex flex-col gap-3">
                    {options.map((option, index) => (
                        <label 
                            key={index} 
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <input
                                type={inputType}
                                value={option.value || option.text}
                                className="w-[22px] h-[22px] accent-primary"
                            />
                            <span className="text-dark-gray-2 text-sm">
                                {option.text}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default FilterGroup;