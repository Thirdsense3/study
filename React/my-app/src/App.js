import './App.css'
import Subject from './components/Subject'
import Navi from './components/Navi'
import Content from './components/Content'
import React, { Component} from 'react'
import Sample from './components/Sample'
import DataView from './components/DataView'

function App() 
{
  return (

    <div style={{margin:"20px"}}>
      {/* <Subject
        name="TheUNIONGraphix"
        address="Korea"
      >
        010-xxxx-xxxx
      </Subject>
      <Navi></Navi>
      <Content
        title="HTML"
        text="React가 제일 쉬웠어요, React 써보며 좋아요."
      >
      </Content> */}
      {/* <Sample></Sample> */}

      <DataView></DataView>
    </div>

  
  );
}

export default App;