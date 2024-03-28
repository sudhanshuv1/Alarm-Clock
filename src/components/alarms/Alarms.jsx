import React from 'react'
import './alarms.css'
import AlarmItem from '../alarmitem/Alarmitem';

const Alarms = ({alarmslist,handleDelete}) => {
  return (
    <div className='alarm-list'>
      <ul>
        {alarmslist.map((item) => (
          <AlarmItem 
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      
    </div>
  )
}

export default Alarms