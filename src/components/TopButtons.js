import React from 'react'

const TopButtons = () => {
    const cities=[
        {
            id: 1, 
            title: "Beirut"
        },
        {
            id: 2, 
            title: "London"
        },
        {
            id: 3, 
            title: "Sydney"
        },
        {
            id: 4, 
            title: "Tokyo"
        },
        {
            id: 5, 
            title: "Paris"
        },
    ]
    
    return (
    
    <div className='flex item-center justify-around my-6 '>
      {cities.map(city=>(
        <button className='text-white text-lg font-medium' key={city.id}>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons
