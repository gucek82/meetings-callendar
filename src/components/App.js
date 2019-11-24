import React, { Component } from "react";
import AddMeeting from "./AddMeeting";
import MeetingsList from "./MeetingsList";
import "./App.scss";

class App extends Component {
  counter = 9;
  option = "down";
  state = {
    meetings: [
      {
        id: 0,
        subject: "Spotkanie nr 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",
        dateStart: "2019-11-22",
        timeStart: "11:30",
        dateEnd: "2019-11-22",
        timeEnd: "12:30",
        option: false
      },
      {
        id: 1,
        subject: "Spotkanie nr 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",
        dateStart: "2019-11-23",
        timeStart: "11:30",
        dateEnd: "2019-11-23",
        timeEnd: "12:30",
        option: false
      },
      {
        id: 2,
        subject: "Spotkanie nr 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",
        dateStart: "2019-11-27",
        timeStart: "11:30",
        dateEnd: "2019-11-27",
        timeEnd: "12:30",
        option: false
      },
      {
        id: 3,
        subject: "Spotkanie nr 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",
        dateStart: "2019-11-19",
        timeStart: "11:30",
        dateEnd: "2019-11-19",
        timeEnd: "12:30",
        option: false
      }
    ],
    option: "up"
  };

  handleShowDesc = id => {
    const meetings = [...this.state.meetings];
    meetings.forEach(meeting => {
      if (meeting.id === id) {
        meeting.option = !meeting.option;
      }
    });
    this.setState({
      meetings
    });
  };

  sortMeetings = e => {
    this.setState({
      option: e.target.value
    });
  };

  addMeeting = (
    subject,
    description,
    dateStart,
    timeStart,
    dateEnd,
    timeEnd
  ) => {
    const meeting = {
      id: this.counter,
      subject: subject,
      description: description,
      dateStart: dateStart,
      timeStart: timeStart,
      dateEnd: dateEnd,
      timeEnd: timeEnd
    };
    this.counter++;
    this.setState({
      meetings: [...this.state.meetings, meeting]
    });
    return true;
  };
  deleteMeeting = id => {
    console.log("delete elementu o id" + id);
    const meetings = [...this.state.meetings];
    const index = meetings.findIndex(meeting => meeting.id === id);

    meetings.splice(index, 1);
    this.setState({
      meetings
    });
  };

  render() {
    console.log(this.state.option);
    return (
      <div className="App">
        <h1>Callendar App</h1>
        <AddMeeting meetings={this.addMeeting} />
        <MeetingsList
          meetingsList={this.state.meetings}
          option={this.state.option}
          deleteMeeting={this.deleteMeeting}
          change={this.sortMeetings}
          showDesc={this.handleShowDesc}
        />
      </div>
    );
  }
}

export default App;
