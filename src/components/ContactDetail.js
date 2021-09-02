import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main ui container">
      <div className="ui card centered">
        <div className="image">
          <img src={user} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="discription">{email}</div>
        </div>
      </div>
      <div className="centered-div">
        <Link to="/">
          <button className="ui button blue centered">
            Back to the contact list
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
