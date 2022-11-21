
import React from 'react'

export default function Netflix(props) {
  return (
    <div className='cards' >
        {/* <div className='card' >
            <img className='card_img' src={props.imgsrc}
            />
            <span style={{margin:"10px 0px 0px 10px"}}> {props.title}</span>
            <h3 id="kkf2"style={{textAlign:"center"
            }}><b>{props.sname}</b></h3>
            <a href={props.link}>
               <button color='black' className='button1'>Watch Now</button>
            </a>

        </div> */}
        <div className='card' >
            <img className='card_img' src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"
            />
            <span style={{margin:"10px 0px 0px 10px"}}> NETFLIX ORIGINAL SERIES</span>
            <h3 id="kkf2"style={{textAlign:"center"
            }}><b>Stranger Things</b></h3>
            <a href="https://www.netflix.com/title/80104198">
               <button color='black' className='button1'>Watch Now</button>
            </a>

        </div>
        <div className='card' >
            <img className='card_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMS7oahS942ONrJCZjnticmZvLokM74iwjtT3HLamyxsQNsLuU"
            />
            <span style={{margin:"10px 0px 0px 10px"}}> NETFLIX ORIGINAL SERIES</span>
            <h3 id="kkf2"style={{textAlign:"center"
            }}><b>Lost in Space</b></h3>
            <a href="https://www.netflix.com/title/80104198">
               <button color='black' className='button1'>Watch Now</button>
            </a>

        </div>
        <div className='card' >
            <img className='card_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5"
            />
            <span style={{margin:"10px 0px 0px 10px"}}> NETFLIX ORIGINAL SERIES</span>
            <h3 id="kkf2"style={{textAlign:"center"
            }}><b>Game of Thrones</b></h3>
            <a href="https://www.whats-on-netflix.com/title/game-of-thrones/">
               <button color='black' className='button1'>Watch Now</button>
            </a>

        </div>
      
    </div>
  );
}
