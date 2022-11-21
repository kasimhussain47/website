import React,{useState} from 'react';


export default function Showtime() {

 let newTime = new Date().toLocaleTimeString(); 
//  const state = useState();
const [time1 , setTime1] = useState(newTime);

const Cclick = () => {
    let newTime = new Date().toLocaleTimeString();  
    setTime1(newTime);

};

    setInterval(Cclick, 1000);
  return (
   <>
        <h1 id='countnum1'> {time1} </h1>
      <button className='button1' onClick={Cclick}>GET TIME</button>
   </>
  )
}
