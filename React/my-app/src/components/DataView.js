import React, {Fragment, useState} from 'react'
import data from '../DB/dummy.json'


export default function DataView(){

    const day = 1;
    const [newData,setNewData] = useState(data)
    console.log(data)
    const searchData = newData.words.filter(word => word.day == day)

    return(
        <Fragment>
        <ul>
            {
                searchData.map(item=>(
                    <li key={item.day}>Day : {item.day} Id : {item.id}</li>
                ))
            }
        </ul>
        <table>
            <tr>
                {
                    searchData.map(word => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))
                }
            </tr>
        </table>
        </Fragment>
    );    
}