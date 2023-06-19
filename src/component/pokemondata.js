import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Pokemondata = () => {
    const[pokemonData,setPokemonData]=useState([]);
    useEffect(()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response)=>{
        setPokemonData(response.data)
    }
) 
    },[])
   
  return (

    <div>
    {pokemonData.map((item)=>{
        return(
            <>
              <ul>
                <li>{item.name}</li>
              </ul>  
            </>
        )
    })}
      
    </div>
  )
}

export default Pokemondata
