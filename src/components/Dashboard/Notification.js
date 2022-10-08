import React, { useEffect, useState } from "react";
import "./Dashboard.css"

const Notification = (props) => {
const notifications = props.data
console.log(props.data)

  return (<>
    <div className="containerNotif">
      <h2 className="heading">NotificationList</h2>
      {notifications.map((item, idx) => (
        <div className="notificaimg" key={idx}>
          <img src={item.pic} alt={idx} width="80px" height="80px"/>
          <p>
            {item.message}.
            <br />
            <span> {item.time}</span>
          </p>
          
        </div>
      ))}

{notifications.map((item, idx) => (
        <div className="notificaimg" key={idx}>
          <img src={item.pic} alt={idx} width="80px" height="80px"/>
          <p>
            {item.message}.
            <br />
            <span> {item.time}</span>
          </p>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default Notification;