import React from "react";

const SlotM = () => {
  let a = "😪";
  // let a = '😮‍💨';
  let b = "😪";
  // let b = '😪';
  let c = "😪";
  // let c = '😮';

  if (a === b && b === c) {
    return (
      <>
        <div id="imoji">
          <h1>
            {a} {b} {c}
            <br/>
            This is Matching.
          </h1>
          <hr />
        </div>
      </>
    );
  }
};

const Matching = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>         
          🔲 WELCOME TO
          <span>
            <b>SLOT MACHINE GAME</b>
          </span>
          🔳
        </h1>
      </div>
      <SlotM />
    </>
  );
};
export default Matching;
