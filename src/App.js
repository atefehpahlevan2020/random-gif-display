import React from 'react';
import myGif from './my.gif';

function App() {

  let myNumber = Math.floor(Math.random()*10) + 1; // random 1-10
  
  return (
    <div style={{margin:'50px auto',textAlign:'center'}}>
      <h1>Random-Gif-Display</h1>
      <h2>Please refresh the page to &nbsp;<strong>7</strong>&nbsp; number</h2>
      <h4>Number:{myNumber}</h4>
      {myNumber === 7 && <img src={myGif} alt='myGif' style={{width:'400px',height:'400px',margin:'30px',textAlign:'center'}} />}
    </div>
  )
}
export default App;
