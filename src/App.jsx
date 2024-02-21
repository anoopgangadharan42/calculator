import { useState } from 'react'
import './App.css'


function App() {
  const[input,setinput] =useState('')
  
  const handleclick =(value)=>{
    setinput(input + value);

  };
  const handlecalculator = ()=>{
    try{
      const result=eval(input);
      setinput(result , toString());
    }catch (err){
      setinput('err');


    }

  };

  const handleclear =() =>{
    setinput('');

  };

  

  return (
    <>
      
      <div className="calculate">
        <input  className= 'display' type="text" value={input} readOnly/>
        <div className="button">
          <button onClick={()=> handleclick('1')}>1</button>
          <button onClick={()=> handleclick('2')}>2</button>
          <button onClick={()=> handleclick('3')}>3</button>
          <button onClick={()=> handleclick('+')}>+</button>
          <button onClick={()=> handleclick('4')}>4</button>
          <button onClick={()=> handleclick('5')}>5</button>
           <button onClick={()=> handleclick('6')}>6</button>
           <button onClick={()=> handleclick('-')}>-</button>
           <button onClick={()=> handleclick('7')}>7</button>
           <button onClick={()=> handleclick('8')}>8</button>
           <button onClick={()=> handleclick('9')}>9</button>
           <button onClick={()=> handleclick('*')}>*</button>
           <button onClick={()=> handleclick('0')}>0</button>
           <button onClick={()=> handleclick('.')}>.</button>
           <button onClick={ handlecalculator}>=</button>
           <button onClick={()=> handleclick('/')}>/</button>
           <button onClick={ handleclear}>del</button>
          

          







        </div>
      </div>
  
       
    </>
  )
}

export default App
