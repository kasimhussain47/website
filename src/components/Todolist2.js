import React from "react";

export default function Todolist2(props) {

   
  return (
    <>
      <div style={{ marginLeft: "10px" }}>
        <li>
          <button
            style={{
              backgroundColor: "black",
              marginLeft: "300px",
              marginBottom: "5px",
            }}
            // id="cross"
            onClick={() => {
                props.onSelect(props.id);
            }}
          >
            
            ❌
          </button>
          {props.text}
        </li>
      </div>
    </>
  );
}
// onClick={list2}
