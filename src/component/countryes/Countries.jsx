import React, { use, useState } from 'react'
import Country from '../country/Country'
import './Countrys.css'

const Countries = ({countresPromise}) => {

  
  const countries = use(countresPromise)
  // console.log(countries)
  const [visitedCountres, setVisitedCountres]=useState([])
  const [filteredCountres, setFilteredCountres]=useState(visitedCountres)

    const handleVisitedCountres = (country)=>{
           const newVisitedCountrys=[...visitedCountres, country]
           setVisitedCountres(newVisitedCountrys)
    }
    const onRemoveCountry = (name) => {
      // console.log(name)
      // console.log(countries)
      const filtered = filteredCountres.filter((country)=> country.name.common !==name)
      setFilteredCountres(filtered)
    
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
              onRemoveCountry={onRemoveCountry}
              country={ country}></Country>)
        }
    </div>
    </div>
  )
}

export default Countries