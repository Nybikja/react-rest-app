import React, { useState } from 'react'
import ImageCard from './mainPageCards';
import itemsCatalog from '../static/itemsCatalog';

function DataFetching({items}) {

    const [data] = useState(itemsCatalog);

    return (
        <div>
            <ul>
                {
                    <div >
                        {items.map(item => (<ImageCard extended={false} item={ item }/>))}
                        {/* {data.length === 0 && <span>No records found to display!</span>} */}
                    </div>
                }
            </ul>
        </div>
    )
}



export default DataFetching
