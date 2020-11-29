import React, { useState } from "react";
import { db } from "./firebase";
import "../Styles/Contact.css";
import MsgImage from "../Images/img-01.png";
import firebase from "firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    db.collection("queries").add({
      name: name,
      number: number,
      email: email,
      message: message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
    setQuery(true);
  };

  return (
    <div className="contact">
      <div className="contact__left">
        <img className="contact__left__image" src={MsgImage} alt="" />
      </div>
      <form>
        <div className="contact__right">
          {query ? (
            <span className="contact1-form-title">Thank You...</span>
          ) : (
            <span className="contact1-form-title">Get in touch</span>
          )}
          <input
            className="contact__input1"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
            required
          />
          <input
            className="contact__input1"
            type="text"
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
            value={number}
            required
          />
          <input
            className="contact__input1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            required
          />
          <textarea
            className="contact__input1 txtarea"
            placeholder="Whats your query about?"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>

          <div className="container-contact1-form-btn">
            <button
              onClick={handleChange}
              type="submit"
              className="contact1-form-btn"
            >
              <span>Send Email</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
