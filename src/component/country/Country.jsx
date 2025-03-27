import React, { useState } from 'react'
import './Country.css'


const Country = ({country,handleVisitedCountres}) => {
    const [visited, setVisited]=useState(false)
   
  const handleVisited = ()=>{
    
    // if(visited === true){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
    setVisited(!visited)
    handleVisitedCountres(country)

  }
  return (
    <div className={`country ${visited && 'country-visited'}`}>
        <h3>Name :{country.name.common} </h3>
        <img src={country.flags.png} alt="" />
        <p>Independent: {country.independent ? "free":'not free'}</p>
        <p>population : {country.population}</p>
        <button onClick={handleVisited}>{visited?'visited':'not visited'}</button>
    </div>
  )
}

export default Country