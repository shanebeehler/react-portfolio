import './EventCalendar.scss';
import React from 'react';

const Calendar = ({ prevMonth, nextMonth, renderWeekdays, renderDates, renderEventsList, months, visibleMonth, visibleYear }) => {
  return (
    <div className='calendar'>
      <div className='calendar__monthRow'>
        <div className='calendar__monthToggle' onClick={() => prevMonth()}>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>

        <div className='calendar__month'>{`${months[visibleMonth]} ${visibleYear}`}</div>

        <div className='calendar__monthToggle' onClick={() => nextMonth()}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>

      <div className='calendar__weekdaysRow'>
        {renderWeekdays()}
      </div>

      <div className='calendar__dates'>
        {renderDates()}
      </div>
    </div>
  );
}

export default Calendar;
