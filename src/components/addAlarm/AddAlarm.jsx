import React from 'react'
import { daysOfWeek } from './daysOfWeek'
import './addAlarm.css'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react';
import Select from 'react-select'

const AddAlarm = ({newAlarmTime,setNewAlarmTime,selectedOptions,setSelectedOptions,handleSubmit}) => {



  const inputRef = useRef();


  return (
    <div className='addAlarm'>
      <form className='addForm' onSubmit={handleSubmit}>
        <input
          autoFocus
          ref={inputRef}
          type='text'
          placeholder='Add Alarm'
          id='text-input'
          required
          value={newAlarmTime}
          onChange={(e) => setNewAlarmTime(e.target.value)}
        />
        <Select 
          options={daysOfWeek}
          onChange={setSelectedOptions} 
          isMulti 
          required 
        />
        
        
        <button
          id='submit-button'
          type='submit'
          aria-label='Add Alarm'
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
      

    </div>
  )
}

export default AddAlarm