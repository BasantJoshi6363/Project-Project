import React from 'react'

const Categories = () => {
    const cat = ["Women's Fashion ", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sport & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"]
    return (
        <div className='w-[27vw] min-h-[30vw] border-r-2 px-[10vw] pt-10'>
            {cat.map((val,i)=>{
                return <p key={i} className='text-[1.3vw] w-max font-semibold'>{val}</p>
            })}
        </div>
    )
}

export default Categories