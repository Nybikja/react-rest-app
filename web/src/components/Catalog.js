import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import DataFetching from './DataFetching';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    inputs: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
    },
    filter:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));


export default function Catalog() {
    const classes = useStyles();


    const [searchText, setSearchText] = useState('');
    const [items, setPosts] = useState([])

    const [loading, setLoading] = useState(true)

    const handleChange = value => {
        axios.get(`http://localhost:3000/hotel/read/search?title=${value}`).then(res => {
            setPosts(res.data)
        })
        setSearchText(value);
    }


    useEffect(() => {
        axios.get('http://localhost:3000/hotel/read')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
                setTimeout(() =>{
                    setLoading(false)
                }, 2000)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (loading===true ? <div className="circular"><CircularProgress className="circularProgress" /></div> : 
        <div>
            <div className={classes.inputs}>
                <input 
                className="inputSearch"
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
                />
                <Link to="/add-hotel" className="btn btn-primary mb-2"> Add hotel</Link>
            </div>
            <div className="">
                <div className="">
                    <div className={classes.root}>
                        <DataFetching items={ items } />
                        {items.length === 0 && <span>No records found to display!</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
