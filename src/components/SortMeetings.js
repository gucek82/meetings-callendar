import React from "react";

const SortMeetings = props => {
  console.log(props.meetingList);
  console.log(props.option);
  return (
    <select value={props.option} onChange={props.change}>
      <option value="up">Data rosnąco</option>
      <option value="down">Data malejąco</option>
    </select>
  );
};

export default SortMeetings;
