
export const SearchPokemon = async(pokemon) =>{
    if(!pokemon){
    }else{
        try {
            const info=pokemon.toLowerCase();
            let url = `https://pokeapi.co/api/v2/pokemon/${info}`
            const response = await fetch(url);
            const data = await response.json()
            getAbout(data.id)
            return data;
        } catch (error) {
            window.alert("No se encontro al pokemon");
        }
    }
};

export const getAbout = async(idx)=>{
    
    if(!idx){

    }else{
    try {
        let url = `https://pokeapi.co/api/v2/ability/${idx}`
        const response = await fetch(url);
        const data = await response.json();
        const element = document.getElementById('about')
        element.innerHTML=data.effect_entries[1].effect;
        return data;
    } catch (error) {
        console.log(error);
    }
}
}




export const getPokemons = async(limit=1, offset=0)=>{

    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch (error) {
    }
};


export const getPokemonsData = async(url)=>{
    
        try {
            const response = await fetch(url);
            const data = await response.json()
            return data;
        } catch (error) {
        }
    
}


