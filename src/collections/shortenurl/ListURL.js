import { useEffect } from 'react';
import List from './List';
import './ShortenURL.css'

const ListURL = ({item}) => {
    let result = JSON.parse(localStorage.getItem('session'));
    console.log("ListURL");
    console.log(result);
    return (
        result.map((data)=>{
            return <List data={data} />
        })
    )
}

export default ListURL
