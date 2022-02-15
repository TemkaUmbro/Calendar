import React, { useEffect, useState } from "react";
import Calendar from 'rc-year-calendar';
import EventCreator from "../eventCreactor/EventCreator";

const currentYear = new Date().getFullYear();

const data = {
  dataSource: [
    {
      id: 0,
      name: 'Google I/O',
      location: 'San Francisco, CA',
      startDate: new Date(currentYear, 4, 28),
      endDate: new Date(currentYear, 4, 29)
    },
    {
      id: 1,
      name: 'Microsoft Convergence',
      location: 'New Orleans, LA',
      startDate: new Date(currentYear, 2, 16),
      endDate: new Date(currentYear, 2, 19)
    },
    // {
    //   id: 2,
    //   name: 'Microsoft Build Developer Conference',
    //   location: 'San Francisco, CA',
    //   startDate: new Date(currentYear, 3, 29),
    //   endDate: new Date(currentYear, 4, 1)
    // },
    // {
    //   id: 3,
    //   name: 'Apple Special Event',
    //   location: 'San Francisco, CA',
    //   startDate: new Date(currentYear, 8, 1),
    //   endDate: new Date(currentYear, 8, 1)
    // },
    // {
    //   id: 4,
    //   name: 'Apple Keynote',
    //   location: 'San Francisco, CA',
    //   startDate: new Date(currentYear, 8, 9),
    //   endDate: new Date(currentYear, 8, 9)
    // },
    // {
    //   id: 5,
    //   name: 'Chrome Developer Summit',
    //   location: 'Mountain View, CA',
    //   startDate: new Date(currentYear, 10, 17),
    //   endDate: new Date(currentYear, 10, 18)
    // },
    // {
    //   id: 6,
    //   name: 'F8 2015',
    //   location: 'San Francisco, CA',
    //   startDate: new Date(currentYear, 2, 25),
    //   endDate: new Date(currentYear, 2, 26)
    // },
    // {
    //   id: 7,
    //   name: 'Yahoo Mobile Developer Conference',
    //   location: 'New York',
    //   startDate: new Date(currentYear, 7, 25),
    //   endDate: new Date(currentYear, 7, 26)
    // },
    // {
    //   id: 8,
    //   name: 'Android Developer Conference',
    //   location: 'Santa Clara, CA',
    //   startDate: new Date(currentYear, 11, 1),
    //   endDate: new Date(currentYear, 11, 4)
    // },
    // {
    //   id: 9,
    //   name: 'LA Tech Summit',
    //   location: 'Los Angeles, CA',
    //   startDate: new Date(currentYear, 10, 17),
    //   endDate: new Date(currentYear, 10, 17)
    // }
  ],
  currentEvent: null
};

const RcCalendar = () => {
  const [state, setState] = useState(data)
  // const [currentEvent, setCurentEcent] = useState(null)
  // useEffect(() => {
  //   setState(data)
  // }, [])

  // console.log(state)

  const onRangeSelected = (e) => {
    setState({ ...state, currentEvent: { startDate: e.startDate, endDate: e.endDate } })
  }

  return (
    <div>
      <Calendar
        enableRangeSelection={true}
        enableContextMenu={true}
        contextMenuItems={[
          // { text: "Update", click: e => setState({ currentEvent: e }) },
          { text: "Update", click: e => console.log('update',e) },
          // { text: "Delete", click: e => setState({ dataSource: state.dataSource.filter(item => item.id !== e.id) }) }
          { text: "Delete", click: e => console.log('delete',e) }
        ]}
        onRangeSelected={onRangeSelected}
        dataSource={state.dataSource}
        />
      <EventCreator state={state} setState={setState} />
    </div>
  );
}

export default RcCalendar