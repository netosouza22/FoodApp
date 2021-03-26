import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function InfoChampion( match ){
    const idChamp = (match["match"]["params"]["id"]);

    const [data, setData] = useState({});
  
            
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${idChamp}.json`);
        
            setData(result["data"]["data"][`${idChamp}`]);
        } 
        fetchData();
    }, []);
    console.log(data);
    function getAbilities(){
        let dataChampion = data;

        let passive = dataChampion["passive"].name;
        let qAbility = 'q';
        let wAbility = 'w';
        let eAbilty = 'e';
        let rAbility = 'r';
    }
    
    function getInfo(){
        let dataChampion = data;

        let name = dataChampion["name"];
        let username = dataChampion["title"];
        let lore;

        console.table();
    }
    
    getInfo();
    
    

    //getting the img of champ to add in the bg
    const imageChampion = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${idChamp}_0.jpg`
        
    
    
    return(
        <div>
            <h1>Item</h1>
        </div>
    );
}