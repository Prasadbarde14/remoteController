import React, { useState } from "react";
import Close_btn from "../Apps/images/Close.svg";
import "./AddPresentation.css";
import { useNavigate } from "react-router-dom";

function AddPresentation() {
  const [formData, setFormData] = useState({ presentationName: "", selectedUrls: [] });
  let navigate = useNavigate();

  const websiteUrls = [
    "https://edo.aidtaas.com/",
    "https://izak.aidtaas.com",
    "https://museo.aidtaas.com",
    "https://around.aidtaas.com",
    "https://gofema.aidtaas.com",
    "https://amplyfund.aidtaas.com",
    "https://nexusconnects.ai/",
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedSelectedUrls = [...formData.selectedUrls];
    if (checked) {
      updatedSelectedUrls.push(value);
    } else {
      updatedSelectedUrls = updatedSelectedUrls.filter((url) => url !== value);
    }
    setFormData((prevData) => ({
      ...prevData,
      selectedUrls: updatedSelectedUrls,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can perform further actions here, such as sending the form data to an API
    // Reset the form after submission if needed
    setFormData({ presentationName: "", selectedUrls: [] });
    navigate("/multipleapps");
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
        <div id="FormContainer">
          <label htmlFor="presentationName">New Presentation</label>
          <input
            type="text"
            id="presentationName"
            value={formData.presentationName}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                presentationName: e.target.value,
              }))
            }
          />
          <label htmlFor="selectedUrls">Choose URLs:</label>
          {websiteUrls.map((url) => (
            <div key={url}>
              {/* Checkbox for each option */}
              <input
                type="checkbox"
                className="presentationUrlCheckbox"
                value={url}
                onChange={handleCheckboxChange}
                checked={formData.selectedUrls.includes(url)}
              />
              <label htmlFor={url}>{url}</label>
            </div>
          ))}
          
          <button type="submit" id="FormSubmitButton">
            Submit Presentation
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPresentation;

