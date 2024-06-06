import React from 'react'
import './App.css'

const App = () => {
  let curDate=new Date();
  curDate=curDate.getHours();
  const cssStyle={ color:'red'};

  let greeting=''
  if(curDate>=0&&curDate<12){
    greeting='Good Morning!';
    cssStyle.color='green';
  }
  else if(curDate>12&&curDate<=18){
    greeting='Good Afternoon!';
    cssStyle.color='orange';
  }
  else{
    greeting='Good Night!';
    cssStyle.color='black';
  }


  return (
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  )
};

export default App