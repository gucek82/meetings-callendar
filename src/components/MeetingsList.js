import React from "react";
import Meeting from "./Meeting";
import SortMeetings from "./SortMeetings";

const MeetingsList = props => {
  const listOfMeetings = props.meetingsList;
  // if (listOfMeetings.length >= 2)
  if (props.option === "up") {
    listOfMeetings.sort((a, b) => {
      a = a.dateStart;
      b = b.dateStart;
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (props.option === "down") {
    listOfMeetings.sort((a, b) => {
      a = a.dateStart;
      b = b.dateStart;
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  console.log(listOfMeetings);

  const list = listOfMeetings.map(meeting => (
    <Meeting
      key={meeting.id}
      id={meeting.id}
      subject={meeting.subject}
      description={meeting.description}
      dateStart={meeting.dateStart}
      timeStart={meeting.timeStart}
      dateEnd={meeting.dateEnd}
      timeEnd={meeting.timeEnd}
      delete={props.deleteMeeting}
      option={meeting.option}
      showDesc={props.showDesc}
    />
  ));

  return (
    <>
      <div>
        <h2>Moje spotkania</h2>

        <SortMeetings
          meetingList={listOfMeetings}
          change={props.change}
          option={props.option}
        />

        {list}
      </div>
    </>
  );
};

export default MeetingsList;
