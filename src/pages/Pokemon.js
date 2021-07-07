import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import AppBarPages from "../components/AppBarPages";
import { toFirstCharUppercase } from "../usefulFunc/firstCharUpperCase"
const Pokemon = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(undefined);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
            .catch(function (error) {
                setPokemon(false);
            });
    }, [pokemonId]);

    const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;
        return (
            <>
                <Typography variant="h3">
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default} alt="spritepokemon" />
                </Typography>
                <img style={{ width: "250px", height: "250px" }} src={fullImageUrl} alt="imgpokemon" />
                <Typography>
                    {"Species: "}
                    <Link href={species.url}>{toFirstCharUppercase(species.name)} </Link>
                </Typography>
                <Typography>Height: {height} </Typography>
                <Typography>Weight: {weight} </Typography>
                <Typography variant="h6"> Types:</Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography key={name}> {`${name}`}</Typography>;
                })}
            </>
        );
    };

    return (
        <>
            <AppBarPages />
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
            {pokemon === false && <Typography> Pokemon not found</Typography>}
        </>
    );
};

export default Pokemon;