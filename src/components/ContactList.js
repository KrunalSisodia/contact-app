import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactID(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main ui container">
      <h2>
        Contact List
        <Link to="/add">
          <button
            className="ui button blue right"
            style={{ marginLeft: "25px" }}
          >
            Add contact
          </button>
        </Link>
      </h2>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
