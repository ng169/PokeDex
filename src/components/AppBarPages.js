import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "#f44336"
    },
}));
function AppBarPages() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => history.push("/PokeDex/")}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Pokemon Info
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default AppBarPages
