import React from 'react'
import Navi from '../../elements/ui/Nav';
import Brand from '../../elements/widgets/brand/Brand';

export default function Features() {
    return(
        <div id="wrap">
            <div class="container-fluid" style={{padding: "0px"}}>
                <Navi></Navi>
            </div>
            
            <Brand></Brand>
        </div>
    )
}