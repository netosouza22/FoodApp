import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import {Card, CardMedia, CardContent} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyle = makeStyles(({URL}) => ({
    maiDiv: {
        "&:hover": {
            transform: "scale(1.2)",
          },
    },
    root: {
        maxWidth: 200,
        maxHeight: 350,
        marginBottom: 20,
        "&:hover": {
            border: "3px solid yellow",
            transform: "scale(1.1) ",
            cursor: "pointer",
            boxShadow: "0px 0px 30px red"
            
          },
        // backgroundImage: URL,
        backgroundSize: 'contain cover',
        backgroundRepeat: 'no-repeat',
        transition: 'transform 0.6s',
    },
    media: {
        // width: 200,
    },
    cardContent: {
        width:"100%",
        height: 130,
        padding: "0px !important",
        transform: "translateY(-130px)",
       
        backgroundColor: "rgba(255,0,0,0.3)",
        textAlign: "center",
        color: "white"
    },


}));

const verifyName = (name) => {
    if(name.includes("'")){

        if(name === "Rek'Sai" || name === "Kog'Maw"){
            let nameWithoutSymbol = name.replace(/[^a-zA-Z0-9]+/g, "");
            return nameWithoutSymbol;
        }else {

        
        let nameWithoutSymbol = name.replace(/[^a-zA-Z0-9]+/g, "");
        let nameLwerCase = nameWithoutSymbol.toLowerCase();
        let nameFinal = nameLwerCase.substring(0,1).toUpperCase().concat(nameLwerCase.substring(1));
        return nameFinal;
    }
        
    }else{
        if(name === "Le Blanc"){
            let nameSimple = name.replace(/[^a-zA-Z0-9]+/g, "");
            return nameSimple;
        }
        if( name === "Wukong"){
            let nameSimple = name.substring(0,1).toLowerCase().concat(name.substring(1));
            return nameSimple;
        }else{
            let nameSimple = name.replace(/[^a-zA-Z0-9]+/g, "");
            return nameSimple;
        }
        
    }
}

function CardChampion({img, name, title}){
    
    const nameSimple = verifyName(name);

    const URL = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nameSimple}_0.jpg`
    const classes = useStyle(URL);    

    return(
  <div className={classes.mainDiv}>
 
        <Card className = {classes.root}>
            {/* <div><h1>{name}</h1></div>
            
            
            <CardContent><h4>{title}</h4></CardContent> */}
            {/* <img src={URL} alt={name}></img> */}
            <CardMedia component="img" image={URL} ></CardMedia>
            <CardContent className={classes.cardContent}>
                    <Typography variant="h4"> {name} </Typography>
                    <Typography variant="p"> {title} </Typography>
            </CardContent>
            
        </Card>
</div>
    );
}

export default CardChampion;