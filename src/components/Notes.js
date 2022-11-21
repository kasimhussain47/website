import React from "react";
import StyleIcon from "@mui/icons-material/Style";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Notes1 from "./Notes1";
import { useEffect } from "react";

export default function Notes() {
  const [addNotes01, setAddNotes01] = useState("");
  const [addNotes02, setAddNotes02] = useState("");
  const [addNotes03, setAddNotes03] = useState("");
  const [addNotes04, setAddNotes04] = useState("");
  const addnotes1 = (e) => {
    console.log(e.target.value);
    setAddNotes01(e.target.value);
  };
  const addnotes3 = (e) => {
    console.log(e.target.value);
    setAddNotes03(e.target.value);
  };
  const addNotes2 = () => {
    setAddNotes02(addNotes01)
    setAddNotes04(addNotes03)
    // setAddNotes02((oldItems) => {
    //   return [...oldItems, addNotes01 , addNotes03];
    // });
    // setAddNotes01("");
    // setAddNotes03("");

    // setAddNotes04((oldItems) => {
    //   return [...oldItems, addNotes03];
    // });
    // setAddNotes03("");
  };
  // const deleteItems = (id) => {
  //   console.log("delete");

  //   setAddNotes04((oldItems) => {
  //     return oldItems.filter((arrElem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          fontSize: "50px",
          marginTop: "10px",
        }}
      >
        {/* <StyleIcon/> */}
        <img
          style={{ marginTop: "10px", marginBottom: "10px" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAB3CAMAAAA98PL0AAAAY1BMVEX///8AAAD8/Pzo6Oji4uLAwMD09PRoaGj4+Pjc3NzGxsYdHR3w8PCbm5s6OjrLy8stLS2QkJBDQ0N9fX0NDQ1hYWHV1dW1tbWFhYWioqJ1dXVOTk4YGBisrKwyMjJTU1MkJCQZ0ArrAAADw0lEQVR4nO2X25KjIBCGUUQkAREPoEZj3v8pF4gmOklmiZOt3a3q72aqHGh++kgQAgAAAAAAAAAAAAAAAAAAAAAA+AeJ/7aA5/yTspIP2MAfsLEQxzHCVVR3PzOKxyGq8Ad9HluDlova7zCsCmdiMJ9LhMyUkWdoOdpzW94erwZyk6FdFtbcd+NuFtazt4za6CNWXbeWcw7EP/XXQfNFXqYrH4S6fy+OSVW7bUWls+U+XB/2S4qRtj6nXbLcDXfX5FBpiL+8S1LlY1d4N7kPcdLRPIr0fllojlrdm6X+Dr3/MoYFIe78arq4Bpu+nqO5P7fG6EZdCu0TFSU+c0sSsJ+4Wx3ba8QzLcr6bnDcKyodojX1STF/wUS5f1T82+vGiFc+2l5TnKhTvbE2fL/9NVX0QCn8IamyR9TfX3d0S1wG2muI8tFUtUsTIo+WHCfjyjIV9tBmSeFHcGM1CaeJm9NzQyE58BVbgMSMomrK/LL1fZT7THEVfyYvms/hHNVV4iOXbzfXl7xsWjEasqcMV6dhTbp+a7yX9jubokg93SysS223RbLfXqfviL5P0x93U0vGxn6VHmdibZJzdNrObHcSnpwTUUyKVUL241zDnyfFht6cVtqZZuus0JvUspEvoja1s/OWTjk1SfqHFN2USbX4wDUtWUTb8SGjQs6tyvtUyXSW+0MyeSCOg9SaJZg/GGRqPjS3AtqoW46MXedtrbLZoeXj2ydOccK0vp0QHla2KpnheCnysqRtZ3SCs0VgxqqzX0AZIoW4bRUFQYxevdSz25EZTqTpWlqW+flyHFZFzYJVdV9by0IxUTXOzwg71LyuWiBeitlVXc6R8Gfmy+jkelR0Kl6Z7IJVTa9MLOIaYfwddTWHsVK+/EQ/B893DsSMaF7KmZlCRfHfWfIuukzCeo371K8y4+7cmczJLJT9LsX0tfs+v2HorwEZYOzKuREsUReb1jZ9kZS6dK97xn7vojuhD0AVbNExVILaN4TACbYtfaCiOr61//l0eCR/tvloK/HUNA11NM10KvNiOd7X1CRdOtbDev00b7B/1us35GGdLN2KOdF2JNJ2Bc7TbB5dcZylHNvGI4mxA3ydP3XTC0OkbXP4y3qOEy3J2NLTVl5Y27+9YBplDnjd5V5diq7OoAEnZPhgVLPsMEGqbBldGkV40GIPvjurfuMHNiequQQ+/1KqJH5zaOklJEf93ryLsVRNQAjjWyq8Yx23XlSLdzyaPvHMegmT4SMNAAAAAAAAAAAAAAAAAAAAAAAA+D/5BduRLqdzHn8BAAAAAElFTkSuQmCC"
        />
        Notes
      </div>
      <div>
        <form style={{ marginTop: "50px" }}>
          <input
            type="text"
            placeholder="Title"
            autocomplete="off"
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "auto",
              border: "0px",
              width: "220px",
              backgroundColor: "#ced4da",
              boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 2)",
            }}
            onChange={addnotes3}
            value={addNotes03}
          />
          <div>
            <textarea
              style={{
                border: "0px",
                backgroundColor: "#ced4da",
                justifyContent: "center",
                display: "flex",
                margin: "auto",
                width: "220px",
                height: "100px",
                // marginTop: "50px",
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 2)",
              }}
              placeholder="Write a note..."
              rows=""
              column=""
              onChange={addnotes1}
              value={addNotes01}
            ></textarea>
            {/* <Button
            className="kfc1"
            style={{
              color: "yellow",
              borderColor: "yellow",
              borderRadius: "500px",
              boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 2)"
            }}
          > */}
            <AddIcon className="kfc2" onClick={addNotes2} />
          </div>
          {/* </Button> */}
        </form>
        <div style={{ height: "auto", width: "200px" }}>

          {/* {addNotes04.map((itemval, index) => {
            return ( */}
              <Notes1
                // key={index}
                // id={index}
                // text={itemval}
                value1={addNotes04}
                // value1={itemval}
                value2={addNotes02}
                // value2={itemval}

                // onClick={addNotes2}
                // onSelect={deleteItems}
              />
            {/* );
          })} */}
          
        </div>
      </div>
    </>
  );
}
