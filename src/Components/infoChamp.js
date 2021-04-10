
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PaperSkills from './InfoPaperSkills';
import InfoChampText from './InfoChampText';
import SkinChampion from './SkinChampion';

import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    //Passing props to makeStyles
    root: props => ({
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${props.imgSkin})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }) ,
    container: props => ({
        boxSizing: 'border-box',
        padding: '50px',
        width: '75%',
        height: '85vh',
        backgroundImage: `url(${props.imgSkin})`,
        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }),
    infoContainer: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    boxFooter: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        flexDirection: 'row',
    },
    skills: {
        width: '40%',
        height: '20vh',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-between',
    }
}));

export default function InfoChampion( match ){
    const idChamp = (match["match"]["params"]["id"]);

    const [data, setData] = useState({});
    const [imgSkin, setImgSkin] = useState(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${idChamp}_0.jpg`);
    const [title, setTitle] = useState('');
    const [isChecked, setIsChecked] = useState(true);

    const classes = useStyles({imgSkin});
            
    useEffect(() => {
        const idChampion = idChamp;
        const fetchData = async() => {
            const result =  await axios(`http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${idChampion}.json`);
            setData(result["data"]["data"][`${idChampion}`]);
            setTitle(result["data"]["data"][`${idChampion}`].title);
        };

        fetchData();
    }, [idChamp]);

    if(Object.keys(data).length === 0){
        return <p>Loading...</p>   
    }

    function changeSkin( val ){
        let idChampion = idChamp;
        let arrSkins = data.skins;

        if(val > 0){
            setIsChecked(false);
            setTitle(arrSkins[val].name);
        }else{
            setIsChecked(true);
            setTitle(data.title);
        }

        let urlImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${idChampion}_${arrSkins[val].num}.jpg`;
        setImgSkin(urlImg);

    }

// ------------------------------Functions to get some values --------------------------------------
    function getAbilities(){
        let dataChampion = data;
        //Passive
        let passiveImg = dataChampion["passive"]['image']['full'];
        let passiveN = dataChampion["passive"].name;
        let passiveD = dataChampion["passive"]["description"];
        //Q ability
        let qAbilityImg = dataChampion["spells"][0]['image']['full'];
        let qAbilityN = dataChampion["spells"][0].name;
        let qAbilityD = dataChampion["spells"][0].description;
        //W ability
        let wAbilityImg = dataChampion["spells"][1]['image']['full'];
        let wAbilityN = dataChampion["spells"][1].name;
        let wAbilityD = dataChampion["spells"][1].description;
        //E ability
        let eAbilityImg = dataChampion["spells"][2]['image']['full'];
        let eAbilityN = dataChampion["spells"][2].name;
        let eAbilityD = dataChampion["spells"][2].description;
        //R ability
        let rAbilityImg = dataChampion["spells"][3]['image']['full'];
        let rAbilityN = dataChampion["spells"][3].name;
        let rAbilityD = dataChampion["spells"][3].description;
    
        return  [{pImg: passiveImg, name: passiveN, description: passiveD  },
                {img: qAbilityImg, name: qAbilityN, description: qAbilityD}, 
                {img: wAbilityImg, name: wAbilityN, description: wAbilityD}, 
                {img: eAbilityImg, name: eAbilityN, description: eAbilityD},
                {img: rAbilityImg, name: rAbilityN, description: rAbilityD}]
    }

   function getInfotext() {
        let dataChampion = data;

        let name = dataChampion["name"];
        let username = title;
        let lore = dataChampion["lore"];

        let arrInfo = [name, username, lore];
        return arrInfo;
    }

    let arrInfoText = getInfotext();
    let arrAbilities = getAbilities();   
    
    return(
        <Box className={classes.root} >

            <Box className={classes.container} 
                borderColor="error.main"
                boxShadow={20}
                borderRadius={5}
            >
                <Box className={classes.infoContainer}>
                    <Box >
                            <InfoChampText arrText = {arrInfoText} show = {isChecked}/>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.skills}>
                            {    
                                arrAbilities.map((arr, index) => {
                                    return <PaperSkills key={index} skill = {arr} />
                                })        
                            }
                        </Box>
                        <Box>
                            <SkinChampion arrSkins = {data.skins} counter = {changeSkin} />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}