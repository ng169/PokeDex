import React from 'react'
import { Typography, Link } from "@material-ui/core";
import { toFirstCharUppercase } from "../usefulFunc/firstCharUpperCase"
function GeneratePokemonJSX(props) {
    const { name, id, species, height, weight, types, sprites } = props.pokemon;
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

}

export default GeneratePokemonJSX
