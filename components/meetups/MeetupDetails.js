import React from "react";
import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  console.log(props);
  const item = !!props.item ? props.item : {};
  return (
    <div className={classes.detail}>
      <img src={item.image} alt="detail" />
      <h1>{item.title}</h1>
      <address>{item.address}</address>
      <p>this is the description of the meeting we can see that here.</p>
    </div>
  );
}

export default MeetupDetails;
