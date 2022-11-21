import React from 'react'

 function Morning() {

    // let curDate=new Date();
   let H=new Date().getHours();
   let M=new Date().getMinutes();
   let S=new Date().getSeconds(); 
   let curDate= H
   let kasim = ":" + M + ":" + S 
    let greeting="";
    const cssStyle = { };


    if (curDate>=6 && curDate<12){
      greeting='Good Morning';
      cssStyle.color='green';

    }
    else if(curDate>12 && curDate<=18){
        greeting='Good Afternoon';
        cssStyle.color='red';

    }
    else if(curDate>18 && curDate<=20){
        greeting='Good Evening';
        cssStyle.color='orange';

    }
    else{
        greeting='Good Night';
        cssStyle.color='brown';

    }

  return (
    

    <div id='css1'>
      <h1>Hello Sir, {curDate}{kasim} <span style={cssStyle}>{greeting}</span></h1>
    </div>
  )
}
 export {Morning};