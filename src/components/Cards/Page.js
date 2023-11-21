"use client"

import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard/Page";

const PokeCards = () => {
    const [allPokemons, setAllPokemons] = useState([]);

    const typeColors = {
        water: 'water',
        fire: 'fire',
        grass: 'grass',
        bug: 'bug',
        normal: 'normal',
        poison: 'poison',
        electric: 'electric',
        ground: 'ground',
        rock: 'rock',
        fairy: 'fairy',
        fighting: 'fighting',
        psychic: 'psychic',
        ghost: 'ghost',
    }

    const getAllPokemon = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=101&offset=0"); //649 total data pokemon
            const data = await response.json();

            const pokemonObjects = await createPokemonObject(data.results);
            setAllPokemons(pokemonObjects);
        } catch (error) {
            console.error('Error fetching all Pokemon:', error);
        }
    };

    const createPokemonObject = async (results) => {
        const pokemonObjects = [];

        for (const pokemon of results) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await response.json();
                pokemonObjects.push(data);
            } catch (error) {
                console.error(`Error fetching details for ${pokemon.name}:`, error);
            }
        }

        return pokemonObjects;
    };

    useEffect(() => {
        const fetchData = async () => {
            await getAllPokemon();
        };

        fetchData();
    }, []);

    return (
        <div className="pokemon-cards mt-3">
            {allPokemons?.map(data => {
                const type = data.types[0].type.name.toLowerCase();
                const bgColor = typeColors[type] || 'gray';
                return (
                    <PokemonCard
                        key={data.id}
                        id={data.id.toString().padStart(3, "0")}
                        image={data.sprites.other["official-artwork"].front_default}
                        name={data.name.replace(/^./, (str) => str.toUpperCase())}
                        type={data.types[0].type.name}
                        bgColor={bgColor}
                        weight={data.weight}
                        height={data.height}
                        stats={data.stats.map((stat) => stat.base_stat).slice(0,3)}
                        statsName={data.stats.map((stat) => stat.stat.name).slice(0,3)}
                    />
                )
            })}
        </div>
    )
};

export default PokeCards;