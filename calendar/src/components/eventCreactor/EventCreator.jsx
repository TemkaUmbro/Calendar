import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"


const EventCreator = ({ state, setState }) => {
    const { dataSource, currentEvent } = state
    const [currentData, setCurrentData] = useState({
        name: '',
        location: '',
        color: ''
    })


    const saveCurrentEvent = () => {
        if (currentEvent.id === undefined) {
            // Add event
            // setState({ ...state, currentEvent: currentEvent.id = Math.max(...dataSource.map(evt => evt.id)) + 1 })
            // setState({ ...currentEvent.id = Math.max(...state.dataSource.map(evt => evt.id)) + 1 })
            currentEvent.id = Math.max(...dataSource.map(evt => evt.id)) + 1
            setState({ ...state, dataSource: dataSource.push(currentEvent), currentEvent: null });
            console.log('Add event', dataSource)
        } else {
            // Update event
            const index = dataSource.findIndex(evt => evt.id === currentEvent.id);
            dataSource[index] = currentEvent;
            setState({ ...state, dataSource: dataSource, currentEvent: null });
            console.log('Update event', dataSource)
        }

        // console.log(currentEvent)
        setState({ ...state, currentEvent: null });
    }

    const onHandleChangeColor = (e) => {
        console.log(e.target.value)
        setState({ ...state, currentEvent: { ...currentEvent, color: e.target.value } })
    }

    const onHandleChangeLocation = (e) => {
        console.log(e.target.value)
        setState({ ...state, currentEvent: { ...currentEvent, location: e.target.value } })
    }
    const onHandleChangeName = (e) => {
        console.log(e.target.value)
        setState({ ...state, currentEvent: { ...currentEvent, name: e.target.value } })
    }

    return (
        <Modal show={currentEvent} onHide={() => setState({ ...state, currentEvent: null })}>
            {currentEvent && (
                <div>
                <Modal.Header closeButton>
                    <Modal.Title>{currentEvent.id !== undefined ? "Update event" : "Add event"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal">
                    <div className="form-group row">
                        <label htmlFor="event-name" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                        <input id="event-name" type="text" className="form-control" value={currentEvent.name} onChange={onHandleChangeName} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="event-location" className="col-sm-2 control-label">Location</label>
                        <div className="col-sm-10">
                        <input id="event-location" type="text" className="form-control" value={currentEvent.location} onChange={onHandleChangeLocation} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="event-color" className="col-sm-2 control-label">Color</label>
                        <div className="col-sm-10">
                        <input id="event-color" type="color" className="form-control" value={currentEvent.color} onChange={onHandleChangeColor} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="min-date" className="col-sm-2 control-label">Dates</label>
                        <div className="col-sm-10">
                        <div className="input-group input-daterange">
                            <input id="min-date" type="date" className="form-control" value={currentEvent.startDate.toISOString().substr(0,10)} onChange={e => setState({ ...state, currentEvent: { ...currentEvent, startDate: e.target.valueAsDate } })} />
                            <div className="input-group-prepend input-group-append">
                                <div className="input-group-text">to</div>
                            </div>
                            <input type="date" className="form-control" value={currentEvent.endDate.toISOString().substr(0,10)} onChange={e => setState({ ...state, currentEvent: { ...currentEvent, endDate: e.target.valueAsDate } })} />
                        </div>
                        </div>
                    </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setState({ ...state, currentEvent: null })}>Close</Button>
                    <Button variant="primary" onClick={() => saveCurrentEvent()}>Save event</Button>
                </Modal.Footer>
                </div>
            )}
        </Modal>
    )

}

export default EventCreator