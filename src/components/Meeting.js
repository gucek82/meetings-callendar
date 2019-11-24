import React from "react";
import "./style/Meeting.scss";

const Meeting = props => {
  return (
    <div className="single-meeting">
      <p>
        <span onClick={() => props.showDesc(props.id)}>
          <strong> {props.subject} </strong>
          <em>
            {props.dateStart} godzina {props.timeStart} do {props.dateEnd}{" "}
            {props.timeEnd}
          </em>
        </span>
        <button onClick={() => props.delete(props.id)}> X </button>
      </p>
      <p className={props.option ? "show" : "hidden"}>{props.description}</p>
    </div>
  );
};

export default Meeting;
