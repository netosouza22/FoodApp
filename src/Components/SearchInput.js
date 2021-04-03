import React from "react"
import {TextField} from "@material-ui/core"
import {AppBar, Toolbar} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() =>({
    root: {

        marginTop: "-25px",
        marginBottom: "10px",
        padding: 20,
        backgroundColor: "#111000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: '5px solid #5D281A'
    
    },
    search: {
        width: '100%',
        backgroundColor: "#d6d6d6",
        textDecoration: 'none',
        border: "2px solid green",

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