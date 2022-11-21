import React, { useState } from "react";

export default function Basicform() {
  const [upper, setUpper] = useState("");
  const [submit, setSubmit] = useState("");
  const [lastName, setlastName] = useState("");
  const [lastNameNew, setlastNameNew] = useState("");
  

  const onSubmits = (event) => {
    event.preventDefault();
    setSubmit(upper);
    setlastNameNew(lastName);
    
    
  };
  const kfki = (event) => {
    console.log(event.target.value);
    setUpper(event.target.value);
    
  };
  
  const kfki1 = (event) => {
    console.log(event.target.value);
    setlastName(event.target.value);
  };
 
   
  
  return (
    <>
      <div>
        <h1
          style={{
            color: "white",
            position: "absolute",
            bottom: "67%",
            right: "45%",
          }}
        >
          Hello!{submit}{lastNameNew}
        </h1>
      </div>
      <form>
        <label
          style={{
            color: "white",
            position: "absolute",
            bottom: "60%",
            right: "65%",
          
          }}
        >
          
          <b>Type smtng :</b>
        </label>
        <input
          type="text"
          placeholder="Enter something"
          style={{
            backgroundColor: "gray",
            borderColor: "red",
            color: "black",
            borderRadius: "5px",
            borderWidth: "2px",
            position: "absolute",
            bottom: "60%",
            right: "37%",
            textAlign: "center",
          }}
          onChange={kfki}
          value={upper}
        ></input>
        <label
          style={{
            color: "white",
            position: "absolute",
            bottom: "50%",
            right: "65%",
          
          }}
        >
         
          <b>Password :</b>
        </label>
        <input
          type="password"
          placeholder="Password"
          style={{
            backgroundColor: "gray",
            borderColor: "red",
            color: "black",
            borderRadius: "5px",
            borderWidth: "2px",
            position: "absolute",
            bottom: "50%",
            right: "37%",
            textAlign: "center",
          }}
          onChange={kfki1}
           value={lastName}
        ></input>
      </form>
      <button
        type="submit"
        id="button2"
        style={{
          backgroundColor: "gray",
          borderColor: "red",
          borderRadius: "15px",
          borderWidth: "4px",
          //   justifyContent:"center",
          //   display:"flex",
          //   margin:"auto",
          position: "absolute",
          bottom: "40%",
          right: "45%",
        }}
        onClick={onSubmits}
        
      >
        Submit
      </button>
    </>
  );
}
