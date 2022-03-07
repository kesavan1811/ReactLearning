import React, { useState } from 'react'
const countries = require('./countries.json')

const DropDown=()=> {

    const[fruit,setFruit]=useState({
        countries:[
            {id:"1",country:"Cambodia"},
            {id:"2",country:"Australia"},
            {id:"3",country:"US"}
    ]})

   const handleChange=(e)=>{
         setFruit(e.target.value)
    }

   const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Your friut is " +" "+ fruit)
    }

   const getUnique=(arr,comp)=>{
        const unique=arr
        // store the comparision values in array
        .map(e=>e[comp])

        // store the keys of the objects
        .map((e,i,final)=>final.indexOf(e)===i&&i)

        // eliminate the dead keys & store unique objects
        .filter(e=>arr[e])
        .map(e=>arr[e]);
    return unique
    }

  return (
    <div>
        <form onSubmit={handleSubmit} > 
        <select value={fruit} onChange={handleChange} >
            <option value="grapefruit">Graprfruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
        <br/>
        <br/>
        <br/>
        <label>
            Looping through Array
            <select value={fruit} onChange={handleChange}>
                {getUnique(countries.world,"country").map(country=>(
                    <option key={country.id} value={country.country} >
                        {country.country}
                    </option>
                ))}
            </select>
        </label>
        <input type="submit" value={"Submit"} ></input>
        </form>
    </div>
  )
}

export default DropDown