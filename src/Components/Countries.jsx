import React, { useState } from 'react'
import axios from 'axios'
import CountryCards from './CountryCards';

function Countries() {
    const [CData,setCData]=useState([]);
    const  getData=()=>{
    axios.get('https://restcountries.com/v3.1/all').then((res)=>
    {
    console.log(res)
    setCData(res.data)
    })
    .catch((err)=>{alert(err)

    })
    return (
    <div className='CountriesBox'>
        <button onClick={getData}>GetCountryData</button>
        {CData.map((country,index)=><CountryCards country={country} key={index}/>)}
        
    </div>
  )
}
}
export default Countries