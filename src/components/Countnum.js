import React,{useState ,useEffect} from 'react';
import { Tooltip } from '@material-ui/core';

export default function Countnum() {

  // let count = 1;
 const state = useState();
const [count , setCount] = useState(0);

const Cclick = () => {
    
    console.log("Clicked");
    setCount(count + 1);

};

// setInterval(() => {                       <= wrong
  //   setCount((count) => count + 1);
  // }, 1000);                                 

// useEffect(() => {                          <= right
//   const interval = setInterval(() => {
//     setCount((count) => count - 1);
//   }, 1000);

//   return () => {
//     clearInterval(interval);
//   };
// }, []);


  return (
   <>
        <h1 id='countnum1'> {count} </h1>
        <Tooltip title="add" >
      <button className='button1' onClick={Cclick}>COUNT</button>
      </Tooltip>
   </>
  )
}



// import React, { useEffect, useState } from "react";
// // import "./styles.css";

// export default function App() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((counter) => counter + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return <div className="App">{counter}</div>;
// }
