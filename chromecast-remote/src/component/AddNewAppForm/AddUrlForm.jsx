import React, { useState } from "react";
import Close_btn from "../Apps/images/Close.svg";
import "./AddUrlForm.css";
import { useNavigate } from "react-router-dom";

function AddUrlForm() {
  const [formData, setFormData] = useState({ url: "" });
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can perform further actions here, such as sending the form data to an API
    // Reset the form after submission if needed
    setFormData({ url: "" });
    navigate("/")
  };

  return (
    <div>
      <header>
        <img
          src={Close_btn}
          alt="close_btn"
          className="Apps_Plus_Btn"
          onClick={() => navigate("/")}
        />
      </header>
      <form onSubmit={handleSubmit}>
        <div id="urlInputContainer">
          <label htmlFor="url">Add New Url</label>
          <input
            type="text"
            id="urlInput"
            value={formData.url}
            onChange={handleChange}
          />
          <button type="submit" id="FormSubmitButton">Submit Url</button>
        </div>
      </form>
    </div>
  );
}

export default AddUrlForm;
