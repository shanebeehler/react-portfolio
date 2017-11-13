import React, { Component } from 'react';
import MainSection          from '../components/MainSection/MainSection';
import EventCalendar        from '../components/EventCalendar/EventCalendar';
import CalendarDate         from '../components/EventCalendar/CalendarDate';
import EventsList           from '../components/EventCalendar/EventsList';
import events               from '../components/EventCalendar/events';
import BottomNav            from '../components/BottomNav/BottomNav';

class EventCalendarContainer extends Component {
  constructor(props) {
    super(props);

    const currentDate  = new Date();
    const currentDay   = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear  = currentDate.getFullYear();

    this.state = {
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthTotalDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      currentDay: currentDay,
      currentMonth: currentMonth,
      currentYear: currentYear,
      visibleMonth: currentMonth,
      visibleYear: currentYear,
      firstDayofMonth: this.getFirstDay(currentMonth, currentYear),
      visibleEvents: undefined
    }

    this.renderEventOnDate = this.renderEventOnDate.bind(this);
    this.renderWeekdays    = this.renderWeekdays.bind(this);
    this.renderDates       = this.renderDates.bind(this);
    this.renderEventsList  = this.renderEventsList.bind(this);
    this.nextMonth         = this.nextMonth.bind(this);
    this.prevMonth         = this.prevMonth.bind(this);
    this.prettifyDate      = this.prettifyDate.bind(this);
  }

  componentDidMount() {
    if (events.length && this.state.visibleEvents === undefined) {
      this.setState({ visibleEvents: this.visibleEvents() });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visibleMonth !== this.state.visibleMonth) {
      this.setState({ firstDayofMonth: this.getFirstDay(this.state.visibleMonth, this.state.visibleYear) });
    }

    if (prevState.visibleYear !== this.state.visibleYear) {
      this.checkLeapYear();
    }

    if (events.length && (prevState.visibleMonth !== this.state.visibleMonth) || this.state.visibleEvents === undefined) {
      this.setState({ visibleEvents: this.visibleEvents() });
    }
  }

  getFirstDay(month, year) {
    var dateObject =  new Date();

    dateObject.setFullYear(year);
    dateObject.setMonth(month);
    dateObject.setDate(1);

    return dateObject.getDay();
  }

  renderWeekdays() {
    return this.state.weekdays.map((weekday) => {
      return (
        <div key={weekday} className='calendar__weekday'>
          {weekday}
        </div>
      );
    });
  }

  renderEventOnDate(date) {
    if (this.state.visibleEvents.length) {
      for (let i = 0; i < this.state.visibleEvents.length; i++) {
        if (parseInt(this.state.visibleEvents[i].date.substr(8, 2)) == date) {
          return (
            this.state.visibleEvents[i]
          );
        }
      }
    }
  }

  renderDates() {
    const monthTotalDay = this.state.monthTotalDays[this.state.visibleMonth];

    var calendarSpots = Array.from(Array(42).keys());

    if (monthTotalDay + this.state.firstDayofMonth <= 35) {
      calendarSpots = Array.from(Array(35).keys());
    }

    return calendarSpots.map((spot, index) => {
      if (index >= this.state.firstDayofMonth && index < this.state.firstDayofMonth + monthTotalDay) {
        let date = index - this.state.firstDayofMonth + 1;

        let event = null;

        if (this.state.visibleEvents !== undefined) {
          event = this.renderEventOnDate(date);
        }

        if (index - this.state.firstDayofMonth + 1 === this.state.currentDay && this.state.visibleMonth === this.state.currentMonth && this.state.visibleYear === this.state.currentYear) {
          return (
            <CalendarDate
              key={index}
              classFlag='calendarDate__date--today'
              date={date}
              event={event}
            />
          );
        }

        return (
          <CalendarDate
            key={index}
            date={date}
            event={event}
          />
        );
      }
      else {
        return (
          <div key={index} className='calendarDate__date'></div>
        );
      }
    });
  }

  prevMonth() {
    if (this.state.visibleMonth === 0) {
      this.setState({ visibleYear: this.state.visibleYear - 1 });
      this.setState({ visibleMonth: 11 });
    }
    else {
      this.setState({ visibleMonth: this.state.visibleMonth - 1 });
    }
  }

  nextMonth() {
    if (this.state.visibleMonth === 11) {
      this.setState({ visibleYear: this.state.visibleYear + 1 });
      this.setState({ visibleMonth: 0 });
    }
    else {
      this.setState({ visibleMonth: this.state.visibleMonth + 1 });
    }
  }

  checkLeapYear() {
    if (this.state.visibleYear % 4 === 0 && this.state.visibleYear % 100 != 0 || this.state.visibleYear % 400 === 0) {
      var stateCopy = Object.assign({}, this.state);
      stateCopy.monthTotalDays[1] = 29;

      this.setState(stateCopy);
    }
    else {
      var stateCopy = Object.assign({}, this.state);
      stateCopy.monthTotalDays[1] = 28;

      this.setState(stateCopy);
    }
  }

  visibleEvents() {
    let visibleEvents = [];

    events.map((event) => {
      if (event.date.substr(0, 4) == this.state.visibleYear && parseInt(event.date.substr(5, 2) - 1) == this.state.visibleMonth) {
        visibleEvents = [...visibleEvents, event];
      }
    });
    return visibleEvents;
  }

  prettifyDate(date) {
    return (
      `${this.state.months[date.substr(5, 2) - 1].substr(0, 3)} ${parseInt(date.substr(8, 2))}`
    );
  }

  renderEventsList() {
    if (this.state.visibleEvents) {
      return this.state.visibleEvents.map(event => {
        return (
          <div className='eventsList__row'>
            <span className='eventsList__dateTime'>
              {this.prettifyDate(event.date)} &bull; {event.start} - {event.end}
            </span>

            <span className='eventsList__title'>
              {event.title}
            </span>
          </div>
        );
      });
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <MainSection>
        <div className='events'>
          <EventCalendar
            prevMonth={this.prevMonth}
            nextMonth={this.nextMonth}
            renderWeekdays={this.renderWeekdays}
            renderDates={this.renderDates}
            renderEventsList={this.renderEventsList}
            months={this.state.months}
            visibleMonth={this.state.visibleMonth}
            visibleYear={this.state.visibleYear}/>


          <EventsList
            visibleEvents={this.state.visibleEvents}
            month={this.state.months[this.state.visibleMonth]}
            prettifyDate={this.prettifyDate}/>
        </div>

        <BottomNav
          leftLinkName='View/Edit Info'
          leftRoute='/edit-information'
          rightLinkName='Contact'
          rightRoute='/contact'/>  
      </MainSection>
    );
  }
}

export default EventCalendarContainer;
