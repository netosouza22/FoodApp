import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardChampion from './CardChampion';
import SearchInput from './SearchInput';

import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // // overflow: 'hidden',
        padding: 0,
        marginLeft: "-40px",
        margin: 0,
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        
        // overflow: 'hidden',
    },
    gridList: {
        width: '100%',
        height: '100%'
    }
}));

function Champions(){
    let nameChamps = [];

    const classes = useStyles();
    const [champion, setChampion] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json");
            const champ = result.data;
            
            setChampion(champ.data);
        }
       fetchData();
    }, [])

    
    // const numberKeysChampion = Object.keys(champion).length;
    for(var i in champion) {
        console.log(i);
        nameChamps.push(i);
    }

    //Filter the names and return a array with the new filtered names.
    function filterName(input){
        nameChamps = nameChamps.filter((item) => {
            return item.includes(input);
        })
        return nameChamps;
    }

   filterName(input);

    const updateInput = async (input) => {
        setInput(input);
     }

    return(
        <ul>
            <div className={classes.root}>
                <SearchInput input={input} onChange={updateInput}></SearchInput>
                <div >
                    <Grid  className={classes.root1}> 
                
                        {nameChamps.map( (item) => {
                                let name = champion[`${item}`]['name'];
                                let img = champion[`${item}`]['image'];
                                let title = champion[`${item}`]['title'];
                                let id = champion[`${item}`]['id'];
        
                                return  <CardChampion id={id} name={name} img={img} title={title} ></CardChampion>       
                            }
                        )}
                    </Grid> 
                </div>    
            </div>
        </ul>       
    );
}

export default Champions;