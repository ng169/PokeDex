import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import axios from "axios";
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { toFirstCharUppercase } from "../usefulFunc/firstCharUpperCase"
import AppBarPokeDex from '../components/AppBarPokeDex';
const useStyle = makeStyles(theme => (
    {
        pokedexContainer: {
            padding: "10px 50px"
        },
        cardMedia: {
            margin: "auto"
        },
    }))

const Pokedex = () => {
    const classes = useStyle();
    const history = useHistory();
    const [pokemonData, setPokemonData] = useState(undefined);
    const [filter, setFilter] = useState("");
    const handleSearchChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    }
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(function (resp) {
                const { data } = resp;
                const { results } = data;
                const newPokeData = {};
                results.forEach((pokemon, index) => {
                    newPokeData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                    }
                })
                setPokemonData(newPokeData);
            })
    }, [])
    const getPokemonCard = (pokemonId) => {
        const { id, name, sprite } = pokemonData[pokemonId];
        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick={() => history.push(`/PokeDex/${pokemonId}`)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px" }}
                    />
                    <CardContent>
                        <Typography>{`${id}.${(toFirstCharUppercase(name))}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
    return (
        <>
            <AppBarPokeDex handleSearchChange={handleSearchChange} />
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemonData).map(pokemonId =>
                        pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId)
                    )}
                </Grid>
            ) : (<CircularProgress />)}

        </>
    )
}

export default Pokedex
