import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you, ${name}! Your message has been received.`);
    // Here you can add code to send the form data to a server, etc.
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;