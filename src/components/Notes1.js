import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Notes1(props) {
  return (
    <div>
      <form style={{marginTop:"50px" }}>
          <input
            type="text"
            placeholder="Title"
            autocomplete="off"
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "auto",
              border: "0px",
              width:"220px" , 
              backgroundColor: "#ced4da",
              boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 2)"
            }}
            value={props.value1}
          /><div>
          <textarea
            style={{
              border: "0px",
              backgroundColor: "#ced4da",
              justifyContent: "center",
              display: "flex",
              margin: "auto",
              width:"220px" ,
              height:"100px" ,
              // marginTop: "50px",
              boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 2)"
            }}
            placeholder="Write a note..."
            rows=""
            column=""
            value={props.value2}
            // onChange={addnotes1}
          ></textarea>
          {/* <Button
            className="kfc1"
            style={{
              color: "yellow",
              borderColor: "yellow",
              borderRadius: "500px",
              boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 2)"
            }}
          /> */}
            <DeleteIcon className='kfc3'
            onClick={() => {
              props.onSelect(props.id);
          }}
             />
             </div>
         
        </form>
        {/* {props.value1}
        {props.value2} */}
    </div>
  )
}
