import React, { useState, useEffect, useRef } from "react";
import Circle from "../images/circle1.png";
import "../CssFolder/OpenPosterProgramsForm.css";
import "../CssFolder/OpenPosterPrograms.css";

function OpenPosterPrograms() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    familyName: "",
    email: "",
    phone: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const popupRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setFormData({
      name: "",
      familyName: "",
      email: "",
      phone: "",
    });
    setValidationErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.phone.match(/^\d{8,}$/)) {
      errors.phone = "Phone must contain at least 8 numbers";
    }
    if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      closePopup();
      window.location.reload();
    } else {
      setValidationErrors(errors);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div>
      <img
        src={Circle}
        alt="PopUpForm Circle"
        className="circle-image-programs"
        onClick={openPopup}
      />
      {isPopupOpen && (
        <div className="popup-form-park-programs">
          <p>
            Are you interested joinig a Fullstack Development, UI/UX, DevOps, or
            Digital Marketing Bootcamp?
          </p>
          <div className="content-form">
          <form onSubmit={handleSubmit} ref={popupRef}>
            <div className="form-group-park-programs">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group-park-programs">
              <input
                type="text"
                name="familyName"
                placeholder="Last Name"
                value={formData.familyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group-park-programs">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {validationErrors.email && (
                <span className="error-message-programs">
                  {validationErrors.email}
                </span>
              )}
            </div>
            <div className="form-group-park-programs">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                pattern="^\d+$"
                required
              />
              {validationErrors.phone && (
                <span className="error-message-programs">
                  {validationErrors.phone}
                </span>
              )}
            </div>
            <div className="form-actions-programs">
              <button type="submit" className="submit-button-programs">
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      )}
    </div>
  );
}

export default OpenPosterPrograms;
