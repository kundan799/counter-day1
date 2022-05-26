import React,{useState} from 'react';
import styles from "./style.module.css"

let Counter = () => {
  const [counter,setCounter]=useState(0);
  const handleClick =(e)=>{
    if(e.target.name==="inc"){
      setCounter(counter+1)

    }
    else{
       if(e.target.name==="dec"){
        setCounter(counter-1)
      }else{
        setCounter(counter*2)
      }
    }
  }
  return (
    <>
    <div>HI Everyone</div>
    {/* <p className={counter%2===0 ? styles.redcol :styles.greencol}>Conter={counter}</p> */}
    <p className={counter%2===0 ? styles.greencol :styles.redcol}>Conter={counter}</p>
    <button className="btn"  name="inc" onClick={handleClick}>Increment</button>
    <button className='btn' name="dec" onClick={handleClick} >Decrement</button>
    <button className='btn' name="dob" onClick={handleClick}>Double</button>
    </>
  )
}

export {Counter};
