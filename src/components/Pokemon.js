import React from 'react'
import Info from './Info';

const Pokemon = (props) => {

    const{infoPokemon}=props;
  return (
    <div>
        {infoPokemon.map((infoPokemon, idx) =>{
            return <Info infoPokemon={infoPokemon} key={infoPokemon.name}/>;
            
        })}
    </div>
  )
}

export default Pokemon