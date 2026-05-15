const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=150"

export const getPokemones = async () => {
    
    try{
        
        const response = await fetch(API_URL);
        const data = await response.json();

        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url)
                return await res.json()
            })
        )

        return pokemonDetails

    } catch (error) {
        
        console.log(error);
    
    }

}