import React from 'react';
import {Link} from 'react-router-dom'

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

function CardChampion({id, img, name, title}){ 
    const nameChamp = id;

    const imageChampion = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nameChamp}_0.jpg`
    const classes = useStyle(imageChampion);    

    return(
  <div className={classes.mainDiv}>
      
        <Link to={`/${id}`}><Card className = {classes.root}>
                                    
                <CardMedia component="img" image={imageChampion} ></CardMedia>
                <CardContent className={classes.cardContent}>
                        <Typography variant="h4"> {name} </Typography>
                        <Typography variant="p"> {title} </Typography>
                </CardContent>
                
            </Card>
        </Link>
</div>
    );
}

export default CardChampion;