import React from 'react';
import { useState, useEffect} from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function SkinChampion({arrSkins, counter}) {
    const [count, setCount] = useState(0);
    console.log(arrSkins);
    useEffect(() => {
        const foo = () => {
            return counter(count);
        }
        foo();
    }, [count])

    function increment(){
        if(count < arrSkins.length - 1){
            setCount(prev => prev + 1);
        }
    }

    function decrement() {
        if(count > 0){
            setCount(prev => prev - 1);
        }
    }
    return (
        <Box>
            <Button onClick = {decrement}> <ArrowBack /> </Button>
            <Button onClick = {increment}> <ArrowForward /> </Button>
        </Box>
    );
}