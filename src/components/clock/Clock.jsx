import './clock.css'
import Time from '../time/Time';
import {useState, useEffect} from 'react'
import React from 'react'



const Clock = () => {

  const [currentTime,setCurrentTime]  = useState(new Date());

  const changeTime = () => {
    let d = new Date();
    setCurrentTime(d);
  }

  useEffect(()=> {
    setInterval(changeTime,500)
  },[]);
  
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
    
  return (
    
    <div id='clock'>
      <Time text={hours}/><p>:</p>
      <Time text={minutes}/><p>:</p>
      <Time text={seconds}/>
    </div>
  )
}

export default Clock