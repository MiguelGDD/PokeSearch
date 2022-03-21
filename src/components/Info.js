import React from 'react'
import styled from 'styled-components'

const Info = (props) => {

    const {infoPokemon} =props;


     const Myimg= styled.img`
     width: 175px;
    height: 175px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
     `;

    const Myh3= styled.h3`
        width: 95%;
        display: inline-block;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 53%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        font-family: 'Poppins';

       
    `;

    const MyPoke = styled.div`
        display: grid;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 13px;
        font-family: 'Poppins';
       
    `;

    const MiP = styled.p`
        width: 95%;
        height: 20%;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 67%;
        transform: translate(-50%, -50%);
        font-size: 70%;
        @media (max-width: 1057px){
            font-size: 16px; 
    }
    @media (max-width: 696px){
            font-size: 14px; 
    }
        
        
    `;
    const ContainerStats = styled.div`
        display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 88%;
    width: 95%;
    
    `;
    
    const InfoStats = styled.div`
    display: flex;
    margin: 0;
    `;

    const ContainerTypes = styled.div`
    position: relative;
    display: flex;
    margin: 0 30% 4% 0;
    display: grid;
    width: 30%;
    `;
    
    const ValuesStats = styled.div`
        
        position: relative;
        margin: 0 0 0 100px;
        text-align: end;

    `;
    const Mih4 = styled.div`
        font-family: 'Poppins';
        font-style: bold;
    `;
  return (
      
    <div>
        <div>
            <Myimg src={infoPokemon.sprites.other.home.front_default} alt={infoPokemon.name}></Myimg>
        </div>
        <div>
            <MyPoke>
                <h1>No {infoPokemon.id} {infoPokemon.name}</h1>
            </MyPoke>
            <div>
                <Myh3>About</Myh3>
                <MiP id='about'>This Pokémon's damaging moves have a 10% chance to make the target flinch
                 with each hit if they do not already cause flinching as a secondary effect. This ability
                  does not stack with a held item. Overworld: The wild encounter rate is halved while this
                   Pokémon is first in the party.</MiP>
            </div>
            <ContainerStats>
                <ContainerTypes>
                    <Mih4>Types</Mih4>
                    <div>{infoPokemon.types.map((type, idx)=>{
                        return <div key={idx}>{type.type.name}</div>;
                    })}
                    </div>
                </ContainerTypes>
                <InfoStats>
                    <div>
                        <Mih4>Stats</Mih4>
                        <div>HP</div>
                        <div>Attack</div>
                        <div>Defense</div>
                        
                    </div>
                    <ValuesStats>
                        <Mih4>Values</Mih4>
                        <div>{infoPokemon.stats[0].base_stat}</div>
                        <div>{infoPokemon.stats[1].base_stat}</div>
                        <div>{infoPokemon.stats[2].base_stat}</div>
                    </ValuesStats>
                </InfoStats>
            </ContainerStats>
        </div>
    </div>
  )
}

export default Info