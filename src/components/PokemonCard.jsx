
const PokemonCard = ({pokemon}) => {
    
    return(
        <div className="bg-pink-200 rounded-xl shadow-lg p-4 text-center">
            
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto shadow-lg"/>
            
            <h2 className="font-bold capitalize">{pokemon.name}</h2>
            <p>{pokemon.base_experience}</p>
            
        </div>
    )

}

export default PokemonCard