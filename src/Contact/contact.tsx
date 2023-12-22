import React, { useState } from "react";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";
import "./contact.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    contactNumber: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
      <><Header /><div className="contact">
      <div className="left-partition">
        <div>
          <p className="message-one">
            Let's make something new, different and more meaningful or make
            things more visual or conceptual?{" "}
            <span className="message-two">Just Say Hello!</span>
          </p>
          <p className="details">- +1234567890</p>
          <p className="details">- A@Amail.com</p>
          <p className="details">- Address</p>
        </div>
      </div>
      <div className="right-partition">
        <form className="inputbox" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required />
          </div>
          <div>
            <label>Contact number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required />
          </div>
          <div>
            <label>Project Description</label>
            <input
              type="text"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required />
          </div>
          <div>
            <button type="submit" className="hire-me-button">
              Hire Me
            </button>
          </div>
        </form>
      </div>
    </div><Footer /></>
  );
}

export default Contact;
