import React from 'react';
import {Link} from 'react-router-dom'

import '../assets/delaGothic.css';

import { makeStyles, createMuiTheme , ThemeProvider} from '@material-ui/core/styles'
import {Card, CardMedia, CardContent} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

//Using a diferent font in material UI
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Dela Gothic One, cursive' ,
        fontSize: [15],
        
    }
})

const useStyle = makeStyles(({URL}) => ({

    root: {
        maxWidth: 200,
        maxHeight: 350,
        marginBottom: 20,
        border: '2px solid #5D281A',
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0px 0px 20px red"
            
          },

        backgroundSize: 'contain cover',
        backgroundRepeat: 'no-repeat',
        transition: 'transform 0.6s',
        textDecorationLine: 'none',
    },
    cardContent: {
        width:"100%",
        height: 40,
        padding: "0px !important",
        transform: "translateY(-40px)",

        backgroundColor: "rgba(255,0,0,0.8)",
        textAlign: "center",
        color: "white",
        
        fontStyle: 'italic',   
    },
}));

function CardChampion({id, name, title}){ 
    const nameChamp = id;

    const imageChampion = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nameChamp}_0.jpg`
    const classes = useStyle(imageChampion);    

    return(
  <div className={classes.mainDiv}>

        <Link to={`/${id}`} style= {{textDecorationLine: 'none'}} ><Card  className = {classes.root}>
                                    
                <CardMedia component="img" image={imageChampion} ></CardMedia>
                <CardContent className={classes.cardContent}>
                    <ThemeProvider theme={theme}>
                        <Typography> {name.toUpperCase()} </Typography>
                    </ThemeProvider>
                </CardContent>
                
            </Card>
        </Link>
</div>
    );
}

export default CardChampion;