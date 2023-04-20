import React from 'react'

const City = ({cities,cityIndex,handleCityChange}) => {
    // console.log(cityIndex);
  return (
    <select onChange={(e)=>handleCityChange(e.target.value)} value={cityIndex} >
        {
            cities.map((city,index)=>{
                return <option key={index} value={index}>{city.name}</option> 
            })
        }
    </select>
  )
}

export default City