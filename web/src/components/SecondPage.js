import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './mainPageCards';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '117vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));




export default function SecondPage() {
    const classes = useStyles();

    const [items, setPosts] = useState([])
    const [visible, setVisible] = useState(3);

    const loadMore = () => {
        setVisible(visible + 3)
    }

    const renderingCard = (item) =>{
        return(
            <div>
                <ImageCard extended={ true } item={item}/>
            </div>
        );
    }

    useEffect(() => {
        axios.get('http://localhost:9090/hotel/read')
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
            {items.slice(0, visible).map(item => renderingCard(item))}
            {visible < items.length && (
                <button className="buttonSecondPage" onClick={ loadMore }>View more</button>
            )}
        </div>
    );
}
