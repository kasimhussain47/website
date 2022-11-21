import React,{useState} from 'react';


export default function Colorchange() {

// const state = useState();
const black = "#212529"
const [change , setChange] = useState(black);

const Cclick = () => {
    let newChange = "#6c757d"
    // console.log("Clicked");
    setChange(newChange);

};
  return (
   <>
      <div style={{backgroundColor: change}}>
      <button className='button1' onClick={Cclick}>CHANGE</button>
      </div>
   </>
  )
}
