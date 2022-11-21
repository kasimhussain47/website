import React from "react";
import { useState } from "react";
import Todolist2 from "./Todolist2";

export default function Todolist() {
  const [add, setAdd] = useState("");
  const [add1, setAdd1] = useState([]);
  // const [addd1, setAddd1] = useState();
  // const [addd2, setAddd2] = useState();

  const list1 = (event) => {
    console.log(event.target.value);
    setAdd(event.target.value);
    // setAdd(<button style={{ backgroundColor: "black" , tabSize:"10px"}} onClick={list2} id="cross">❌</button>)
  };
  const list2 = () => {
    // setAdd1(add);
    setAdd1((oldItems) => {
      return [...oldItems, add];
    });
    setAdd("");
  };

    const deleteItems = (id) => {
      console.log("delete");

      setAdd1((oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        });
      });
    };
  

  return (
    <div>
      <div
        className="todo"
        style={{ backgroundColor: "#6d5893", marginTop: "50px"}}
      >
        <h1 style={{ textAlign: "center" }}>
          <b> To Do List 👺 </b>
        </h1>
      </div>
      <div
        className="todo1"
        style={{ textAlign: "center", margin: "auto", marginTop: "50px" }}
      >
        <input
          style={{
            backgroundColor: "#adb5bd",
            border: "0px",
            borderRadius: "7px",
            textAlign: "center",
            //   textUnderlinePosition: "under",
          }}
          type="text"
          placeholder="Add a Items"
          value={add}
          onChange={list1}
        ></input>
        <button
          className="todo2"
          //   style={{ backgroundColor: "purple", marginLeft: "35px" }}
          onClick={list2}
        >
          <h3 style={{ textAlign: "center", margin: "auto" }}>➕</h3>
        </button>
      </div>
      <ol style={{ margin: "auto", marginTop: "50px" }}>
        

        {add1.map((itemval, index) => {
          return (
            <Todolist2            
              // key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems}
            />
          );
        })}
      </ol>
    </div>
  );
}

