import React, { use, useState } from 'react'
import Country from '../country/Country'
import './Countrys.css'

const Countries = ({countresPromise}) => {

  const [visitedCountres, setVisitedCountres]=useState([])

    const countries = use(countresPromise)
    // console.log(countries)

    const handleVisitedCountres = (country)=>{
           const newVisitedCountrys=[...visitedCountres, country]
           setVisitedCountres(newVisitedCountrys)
    }
  return (
    <div>
    <h1>Traveling Countries : {countries.length}</h1>
    <h3>Traveled so far: {visitedCountres.length}</h3>
    <div className='countrys'>
        {
            countries.map(country => <Country 
              key={country.cca3} 
              handleVisitedCountres={handleVisitedCountres}
              country={country}></Country>)
        }
    </div>
    </div>
  )
}

export default Countries