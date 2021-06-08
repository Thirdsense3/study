import React,{useState} from 'react'

export default function Subject(data,props,number) {
    const [좋아요,좋아요변경]=useState(0)

    const handleClick = ()=>{
        좋아요변경(좋아요+1);
    }

        return(
            <header>
            <h1>React App{props.name}<span onClick={(handleClick)}>좋아요오</span>{좋아요}</h1>
            <h2>{props.address}</h2>
            <p>PhonoeNumber: {props.children}</p>
          </header>
        );
}