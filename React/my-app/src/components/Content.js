import React, {useState} from 'react'

export default function Content(props){
  const [title,settitle]=useState("HTML")
  const [text,settext]=useState("React가 제일 쉬웠어요, React 써보며 좋아요.")

  const click = ()=>{
    settitle("Test")
    settext("Test")
  }

      return(
          <header>
          <h1>{props.title}<span onClick={(click)}></span></h1>
          <h2>{props.text}</h2>
        </header>
      );
}