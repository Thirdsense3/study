import React, {useState, Fragment} from 'react'

export default function Navi(){
    let [urlName, setUrlName] = useState([
        '네이버',
        '다음',
        '페이스북',
        '인스타그램',
        '카카오톡',
        '라인'    
    ]);

    return(
        <Fragment>
        <nav>
            <ul>
                {
                    urlName.map((item,index)=>{
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </nav>

        </Fragment>
    )
}