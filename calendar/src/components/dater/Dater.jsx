import React, { useEffect, useState, createRef } from 'react';
import Calendar from 'react-awesome-calendar';

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2022-02-02T18:00:00+00:00',
    to: '2022-02-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2022-02-01T13:00:00+00:00',
    to: '2022-02-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2022-02-06T13:00:00+00:00',
    to: '2022-02-10T20:00:00+00:00',
    title: 'This is also another event'
}, {
    id: 4,
    color: '#fda256',
    from: '2022-02-22T18:00:00+00:00',
    to: '2022-02-23T19:30:00+00:00',
    title: 'Dinner',
},
{
    id: 5,
    color: '#8281fd',
    from: '2022-02-15T12:00:00+00:00',
    to: '2022-02-18T21:00:00+00:00',
    title: 'Doctors',
}
];

const Dater = () => {
    const [calendar, setCalendar] = useState(createRef())
    const [event, setEvent] = useState([])

    const onClickTimeLine = (date) => {
        console.log('TimeLine', date)
    }

    const onClickEvent = (event) => {
        console.log('Event', event)
    }

    const onChange = (date) => {
        console.log('onChange', date);
    }

    const addEvent = () => {
        setEvent([{
            id: 6,
            color: '#1181fd',
            from: '2022-02-15T10:00:00+00:00',
            to: '2022-02-18T10:00:00+00:00',
            title: 'Test',
        }])
        return <>
            132
            132
            13
        </>
    }

    useEffect(() => {
        const details = calendar.current.getDetails()
        console.log(details);
        // setEvent(events)
         /* result
            {
                mode: 'monthlyMode',
                year: 2022,
                month: 2,
                day: 13
            }
        */
    }, [calendar])

    return (
        <div>
            <button onClick={addEvent}> add event </button>
            <Calendar
                onClickTimeLine={onClickTimeLine}
                onClickEvent={onClickEvent}
                // onChange={onChange}
                events={event}
                ref={calendar}
            />
        </div>
    );
}

export default Dater