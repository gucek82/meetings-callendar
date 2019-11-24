import React, { Component } from "react";
import "./style/AddMeeting.scss";

class AddMeeting extends Component {
  state = {
    subject: "",
    description: "",
    dateStart: new Date().toISOString().slice(0, 10),
    timeStart: new Date().toLocaleTimeString().slice(0, 5),
    dateEnd: new Date().toISOString().slice(0, 10),
    timeEnd: new Date().toLocaleTimeString().slice(0, 5)
  };

  handleSubject = e => {
    this.setState({
      subject: e.target.value
    });
  };
  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleDateStart = e => {
    this.setState({
      dateStart: e.target.value
    });
  };
  handleTimeStart = e => {
    this.setState({
      timeStart: e.target.value
    });
  };
  handleTimeEnd = e => {
    this.setState({
      timeEnd: e.target.value
    });
  };
  handleDateEnd = e => {
    this.setState({
      dateEnd: e.target.value
    });
  };
  handleClick = () => {
    console.log("dodaj");
    const {
      subject,
      description,
      dateStart,
      timeStart,
      dateEnd,
      timeEnd,
      option
    } = this.state;

    if (subject.length > 2) {
      const meetings = this.props.meetings(
        subject,
        description,
        dateStart,
        timeStart,
        dateEnd,
        timeEnd,
        option
      );
      if (meetings) {
        this.setState({
          subject: "",
          description: "",
          dateStart: dateStart,
          timeStart: timeStart,
          dateEnd: dateEnd,
          timeEnd: timeEnd,
          option: false
        });
      }
    } else {
      alert("za krótka nazwa");
    }
  };
  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    let minTime = new Date().toLocaleTimeString().slice(0, 5);

    return (
      <div className="form">
        <input
          type="text"
          placeholder="temat spotkania..."
          value={this.state.subject}
          onChange={this.handleSubject}
        />
        <textarea
          type="text"
          placeholder="opis spotkania..."
          value={this.state.description}
          onChange={this.handleDescription}
        />
        <h4>Data spotkania:</h4>
        <label>
          Od
          <input
            type="date"
            value={this.state.dateStart}
            min={minDate}
            max={maxDate}
            onChange={this.handleDateStart}
          />
          <input
            type="time"
            value={this.state.timeStart}
            min={minTime}
            onChange={this.handleTimeStart}
          />
        </label>
        <label>
          Do:
          <input
            type="date"
            value={this.state.dateEnd}
            min={minDate}
            max={maxDate}
            onChange={this.handleDateEnd}
          />
          <input
            type="time"
            value={this.state.timeEnd}
            min={minTime}
            onChange={this.handleTimeEnd}
          />
        </label>
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddMeeting;
