import React from 'react'

const Categories = () => {
    const cat = ["Women's Fashion ", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sport & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"]
    return (
        <div className='w-[40vw] border-r-2  px-[10vw] '>
            {cat.map((val, i) => {
                return <div key={i} className='text-2xl flex flex-row-reverse gap-2'>
                    <h3 className=''>{val}</h3>
                </div>
            })}

        </div>
    )
}

export default Categories