import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${formData.name} sent!`);
  };

  return (
    <div className="container mx-auto py-20">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="w-full p-2 mb-4 border rounded"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
