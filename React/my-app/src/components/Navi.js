import React, {useState, Fragment} from 'react'

export default function Navi(){
    let [urlName, setUrlName] = useState(['http://www.naver.com'])

    return(
        <Fragment>
        <nav>
            <ul>
                <li><a href="">{urlName[0]}</a></li>
                <li><a href={urlName[1]}>CSS</a></li>
                <li><a href="3.html">JAVASCRIPT</a></li>
            </ul>
        </nav>

        </Fragment>
    )
}