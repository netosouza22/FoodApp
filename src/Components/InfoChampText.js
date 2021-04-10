import React from 'react';

import Collapse from '@material-ui/core/Collapse'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import '../assets/delaGothic.css';

// const theme = createMuiTheme({
//     typography: {
//         fontFamily: 'Dela Gothic One, cursive' ,
//         fontSize: 11,
//     },
// })

const useStyles = makeStyles(theme => ({
    root: {
        boxSizing: 'border-box',
        padding: '0px',
        width: '50%',
        height: '100%',
        textAlign: 'left',
        lineHeight: 1.3,
    },
    text: {
        lineHeight: 1.3,
        fontFamily: 'Dela Gothic One, cursive',
    },
    paragraph: {
        marginTop: '20px',
        fontSize: '15px',
        width: '100%',
        lineHeight: 1,
        backgroundColor: 'black',
    }

}));

export default function InfoChampText({arrText, show}){
    const classes = useStyles();
    const texts = arrText;
    
    return(
        <Box className={classes.root1}>
            <Box className = {classes.root} >
                <ThemeProvider >
                    <Typography variant="h2" className={classes.text} >{texts[0]}</Typography>
                    <Typography variant="h5" className={classes.text}>{texts[1]}</Typography>
                    <Collapse in={show}>
                        <Typography variant="p" className={classes.paragraph} lineheight={20} >{texts[2]}</Typography>
                    </Collapse>
                    
                </ThemeProvider>
            </Box>
        </Box>
    )
}