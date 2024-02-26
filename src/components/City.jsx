import React from 'react'

const City = ({city}) => {

  return (
    <div>
        <div>
            <h1 className='text-2xl'>{city.main.temp}</h1>
            <h1 className='text-2xl'>{city.name}</h1>
            <h1 className='text-2xl'>{city.weather[0].main}</h1>
        </div>
    </div>
  )
}

export default City