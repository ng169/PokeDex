import React from 'react'
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { alpha } from '@material-ui/core/styles';
import axios from "axios";
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
const useStyle = makeStyles(theme => (
    {
        pokedexContainer: {
            padding: "10px 50px"
        },
        appbar: {
            backgroundColor: "#f44336"
        },
        cardMedia: {
            margin: "auto"
        },
        root: {
            flexGrow: 1
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block'
            }
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        }
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
        const toFirstCaseUppercase = name =>
            name.charAt(0).toUpperCase() + name.slice(1)

        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick={() => history.push(`/PokeDex/${pokemonId}`)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px" }}
                    />
                    <CardContent>
                        <Typography>{`${id}.${(toFirstCaseUppercase(name))}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <div className={classes.root}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Pokedex
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                onChange={handleSearchChange}
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </div>

            </AppBar>
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
