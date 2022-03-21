import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
const {useState} = React;




const Buscar = (props) => {

    const { onSearch } =props;
    const [search, setSearch] = useState('')

    const onChange = (e) =>{
        setSearch(e.target.value)
    }

    const onClick = async() =>{
        onSearch(search);
    }

    const Mybuton = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 90%;
    cursor:pointer;
   
    `;

  return (
    <div className='containerSearch'>
     
      <input type='search' className='inputSearch' placeholder='Buscar Pokemon' onChange={onChange} onSubmit={onClick} />
        <Mybuton  onClick={onClick}>
        <FontAwesomeIcon  icon={faMagnifyingGlass}/>
        </Mybuton>
        
    </div>
  )
}

export default Buscar