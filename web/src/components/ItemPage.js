import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import HotelPage from './aboutHotel/HotelPage';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}));
export default function ItemPage() {
    const classes = useStyles();

    const [items, setPosts] = useState([])

    const { id } = useParams();

    

    useEffect(() => {
        axios.get('http://localhost:3000/hotel/read/' + id)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    
    return (
        <div className={classes.root}>
            <HotelPage item={items}/>
        </div>
    );
    

}
