import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import '../assets/delaGothic.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Dela Gothic One, cursive' ,
        fontSize: 11,
        
    },
})

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
    },
    paragraph: {
        fontSize: '15px',
        width: '35%',
        lineHeight: 1,
        backgroundColor: 'black',
    }

}));

export default function InfoChampText({arrText}){
    const classes = useStyles();
    const texts = arrText;
    
    return(
        <Box className={classes.root1}>
            <Box className = {classes.root} >
                <ThemeProvider theme={theme}>
                    <Typography variant="h2"  fontWeight="fontWeightBold" className={classes.text} >{texts[0]}</Typography>
                    <Typography variant="h5" className={classes.text}>{texts[1]}</Typography>
                    <Typography variant="p" className={classes.paragraph} lineheight={9} >{texts[2]}</Typography>
                </ThemeProvider>
            </Box>
        </Box>
    )
}