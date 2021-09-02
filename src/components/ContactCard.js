import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img src={user} style={{ height: "50px", width: "50px" }} />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "10px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
