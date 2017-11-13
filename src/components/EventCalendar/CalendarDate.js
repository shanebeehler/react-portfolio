import './CalendarDate.scss';
import React from 'react';

const CalendarDate = ({ date, event, classFlag }) => {
  if (event) {
    return (
      <div className={`calendarDate__date ${classFlag} calendarDate__date--event`}>
        {date}
        <div className='calendarDate__event'></div>
      </div>
    );
  }
  else {
    return (
      <div className={`calendarDate__date ${classFlag}`}>
        {date}
      </div>
    );
  }
}

export default CalendarDate;
