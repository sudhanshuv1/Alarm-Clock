import React from 'react'
import './alarmitem.css'
import {FaTrashAlt} from 'react-icons/fa'

const AlarmItem = ({item,handleDelete}) => {
  return (
      <li>
        <p id='alarm-information'>
          {item.alarmTime},
          {item.days}
        </p>
        <button id='trash-button-container'>
          <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    id='trash-button'
                    tabIndex="0"
                    aria-label={`Delete ${item.id}`}
          />
        </button>
      </li>
  )
}

export default AlarmItem