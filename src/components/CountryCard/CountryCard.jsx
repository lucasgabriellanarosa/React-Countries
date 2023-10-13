import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

export const CountryCard = ({countryData}) => {
  console.log(countryData)
  return (
    <li className='countryCard'>
      <img src={countryData.flags.png} className='flag' />
      <Link className='link' to="/">{countryData.name.common}</Link>
    </li>
  )
}
