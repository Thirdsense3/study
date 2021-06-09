import React,{useState} from 'react'

export default function Sample(){
    // let name = 'mike';

    const [name,setName] = useState('mike')

    function handleClick(){
        let newName = name === 'mike' ? 'jane' : 'mike';
        setName(newName)
    }

    function showText(event){
        console.log(event.target.value)
    }

    return(
        <div>
            <h1>HELLO</h1>

            <h2>{name}</h2>
            <button onClick={()=>{
                let newName = name === 'mike' ? 'jane' : 'mike';
                setName(newName)
            }}>Showname</button>
            <input type="text" onChange={(e)=>{
                console.log(e.target.value)
            }}></input>
        </div>
    )
}