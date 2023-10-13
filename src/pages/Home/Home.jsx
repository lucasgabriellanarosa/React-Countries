import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { CountryCard } from '../../components/CountryCard/CountryCard'
import './home.css'

export const Home = () => {

  const [countriesData, setCountriesData] = useState([])
  const [query, setQuery] = useState("")
  
  const getCountriesData = async() => {
    await fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then((data) => {
      setCountriesData(data)
    })
  }

  useEffect(() => {
    getCountriesData()
  }, [])

  
  return (
    <main className='mainContainer'>
      <Header query={query} setQuery={setQuery}/>
      <ul className='countryList'>
        {countriesData.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase())).map((filteredCountry) => (
            <CountryCard key={filteredCountry.name.common} countryData={filteredCountry}/>
        ))} 
      </ul>
    </main>
  )
}
