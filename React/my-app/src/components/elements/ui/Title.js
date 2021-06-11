import React from 'react';

export default function Title({title}){
    
    return (
        <div className="row mh-4">
            <div className="col-12 col-md-6 offset-md-3 title">
                <h3>{title}</h3>
            </div>
        </div>

    );
}