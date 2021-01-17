import React from "react"
import {TextField} from "@material-ui/core"
import {AppBar, Toolbar} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() =>({
    root: {
        marginTop: "-17px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    search: {
        width: 500,
        backgroundColor: "#d6d6d6",
        border: "2px solid green",
        borderRadius: "20px",

    },
    resize: {
        fontSize: "20px",
        fontWeight: "800",
    }
}))

function SearchInput ({input, onChange}){
    let classes = useStyles();

    return(
        <>
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <TextField 
                    InputProps={{
                    classes: {
                        input: classes.resize,
                    },
                    }}
                    className = {classes.search}
                    value={input} 
                    placeholder="Encontre o Campeão" 
                    onChange={(e) => onChange(e.target.value)}
                    id="outlined-basic"
                    variant="outlined" />
            </Toolbar>
        </AppBar>

        </>
    )
}

export default SearchInput;