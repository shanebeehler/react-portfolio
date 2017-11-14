import './EventsList.scss';
import React from 'react';

const EventsList = ({ prettifyDate, visibleEvents, month }) => {
  const renderEventsListRows = () => {
    if (visibleEvents && visibleEvents.length) {
      return visibleEvents.map((event, index) => {
        return (
          <div className='eventsList__row' key={index}>
            <span className='eventsList__dateTime'>
              {prettifyDate(event.date)} &bull; {event.start} - {event.end}
            </span>

            <span className='eventsList__title'>
              {event.title}
            </span>
          </div>
        );
      });
    }
    else {
      return (
        <div className='eventsList__row'>
          No Events Scheduled for {month}.
        </div>
      );
    }
  }

  return (
    <div className='eventsList'>
      <div className='eventsList__topRow'>
        <h3 className='eventsList__header'>{month} Events</h3>
      </div>

      {renderEventsListRows()}
    </div>
  );
}

export default EventsList;
