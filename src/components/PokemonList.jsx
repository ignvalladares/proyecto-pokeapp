import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { getPokemones } from '../services/pokeApp'

const PokemonList = () => {
    const [pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemones()
            setPokemones(data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const buscarPokemon = pokemones.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

    if (loading) {
        return (
            <div>
                Cargando pokemones...
            </div>
        )
    }

    return (
        <div>
            <input type='text' placeholder='Buscar pokemones...' value={search} onChange={(e) => setSearch(e.target.value)} className='mx-auto block bg-pink-200 text-black border border-pink-200 rounded-lg p-2 w-full max-w-md mb-4 focus:outline-none focus:ring-4 focus:ring-pink-400   ' />
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-pink-500'>
                {
                    buscarPokemon.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </div>

        </div>
    )

}

export default PokemonList