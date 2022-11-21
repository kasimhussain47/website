import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Kush from "./components/Kush"
import Kasla from "./components/Kasla";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import * as kuchbhi from "./components/Morning";
import Netflix from "./components/Netflix";
import Matching from "./components/Matching";
import Countnum from "./components/Countnum";
import Showtime from "./components/Showtime";
import Colorchange from "./components/Colorchange";
import Basicform from "./components/Basicform";
import Myform from "./components/Myform";
import Todolist from "./components/Todolist";
import Notes from "./components/Notes";
// import { Notes } from "@material-ui/core";

function App() {
  // const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message,type)=> {

  //   setAlert({
  //     msg:message,
  //     type:type
  //   })

  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1000);
  // } 

  // const toggleMode = ()=> {
  //   if(mode === 'light'){
  //     setMode ('dark');
  //     document.body.style.backgroundColor = 'grey';
  //     showAlert("Dark mode has been enabled", "success");
  //   }
  //   else{
  //     setMode ('light');
  //     document.body.style.backgroundColor = '#adb5bd';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  return (
    <>

{/* <Router> */}
  {/* <NavLink to="/">Navbar</NavLink> */}
  {/* <NavLink to="/Netflix">Netflix</NavLink> */}

      {/* <Routes>
          <Route path="/" element={<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>}/>
          <Route path="/Netflix" element={<Netflix/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Basicform" element={<Basicform/>}/>

      </Routes>
</Router> */}
      {/* <div id="kkhusain"> */}
{/* <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> */}
{/* <Alert alert={alert} /> */}
{/* <div className='container my-4'> */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
      {/* <About/> */}
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>           */}
      {/* </div>
</div> */}
      {/* <a href='https://www.youtube.com/' target="_kasim">
<img src="image1.jpeg"/>
</a> */}
      {/* <kuchbhi.Morning/> */}
      {/* <div className="kkf">
        <a href="/" className="kkf1" data-uia="netflix-header-svg-logo">
          <svg
            viewBox="0 0 111 30"
            data-uia="netflix-logo"
            className="svg-icon svg-icon-netflix-logo"
            aria-hidden="true"
            focusable="false"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
        
        </a>
      </div> */}

      {/* <Netflix
        imgsrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"
        alt="img1"
        title="NETFLIX ORIGINAL SERIES"
        sname="Stranger Things"
        link="https://www.netflix.com/title/80057281" 
      />
      <Netflix
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMS7oahS942ONrJCZjnticmZvLokM74iwjtT3HLamyxsQNsLuU"
        alt="img2"
        title="NETFLIX ORIGINAL SERIES"
        sname="Lost in Space" 
        link="https://www.netflix.com/title/80104198"
      />
      <Netflix
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5"
        alt="img3"
        title="NETFLIX ORIGINAL SERIES"
        sname="Game of Thrones"
        link="https://www.whats-on-netflix.com/title/game-of-thrones/"
      />
      <Netflix
        imgsrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQOtj4pUXP9fzyUz5gVYkZt3_1Z1gCNsGEPmT5snx_Xxhp0UNo"
        alt="img4"
        title="NETFLIX ORIGINAL SERIES"
        sname="Vikings"
        link="https://www.netflix.com/in/title/70301870"
      />
      <Netflix
        imgsrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS15WXzJnh5FKZcjV7jwxj57HtPiu-mJyMBPJL7E2rPEFbLRPjA"
        alt="img5"
        title="NETFLIX ORIGINAL SERIES"
        sname="Dark"
        link="https://www.netflix.com/title/80100172"
      />
      <Netflix
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSxTjyut3fNQBjHJp4icyP-Qzl8uU7KkMIAGbHjr8Jzix3_mMTWbikRnJmpv4OPqpvp4&usqp=CAU"
        alt="img5"
        title="NETFLIX ORIGINAL SERIES"
        sname="Money Heist"
        link="https://www.netflix.com/title/80192098"
      />
      <Netflix
        imgsrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-IzQZViMaCt9Ufe97-6mRCmPs3T6GYEcFFNIytkzTWUpHCbht"
        alt="img5"
        title="NETFLIX ORIGINAL SERIES"
        sname="Squid Game"
        link="https://www.netflix.com/title/81040344"
      />
      <Netflix
        imgsrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjlU10XSzoxnmWAzJhadQvxYYEew49ogNqnDalCumIGid433o7"
        alt="img5"
        title="NETFLIX ORIGINAL SERIES"
        sname="Hellbound"
        link="https://www.netflix.com/title/81256675"
      />
      <Netflix
        imgsrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSEfS1usmri4dvCUiSMRWHRhOgQSAToBUrIwVsfFFslA0k8yZy"
        alt="img5"
        title="NETFLIX ORIGINAL SERIES"
        sname="The Sandman"
        link="https://www.netflix.com/title/81150303"
      /> */}

      {/* <Matching/> */}
    {/* <Countnum/> */}
    {/* <Showtime/> */}
    {/* <Colorchange/> */}
      {/* <Basicform /> */}
      {/* <Myform/> */}
      {/* <Todolist/> */}
      <Notes/>
    </>
  );
}

export default App;
