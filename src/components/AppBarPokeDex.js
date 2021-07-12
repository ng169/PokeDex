import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
function AppBarPokeDex({ handleSearchChange }) {
    const useStyle = makeStyles(theme => (
        {
            appbar: {
                backgroundColor: "#f44336"
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
    const classes = useStyle();
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
                                placeholder="Search..."
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
        </>
    )
}

export default AppBarPokeDex
