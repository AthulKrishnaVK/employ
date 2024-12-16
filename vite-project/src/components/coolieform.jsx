import React, { useState } from "react";

function DetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
      }); // Clear form after submission
    }
  };

  return (
    
   <main className="emp">
<div className="employee">
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", }}>
      <h2>Employee Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div style={{ marginBottom: "15px" ,marginTop:"20px"}}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px",color:"black" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.name && <p style={{ color: "red", marginTop: "5px" }}>{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px",color:"black" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.email && <p style={{ color: "red", marginTop: "5px" }}>{errors.email}</p>}
        </div>

        {/* Address Input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="address" style={{ display: "block", marginBottom: "5px",color:"black" }}>
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            //   fontFamily:"initial"
            }}
          />
          {errors.address && <p style={{ color: "red", marginTop: "5px" }}>{errors.address}</p>}
        </div>

        {/* Phone Input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone" style={{ display: "block", marginBottom: "5px",color:"black" }}>
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.phone && <p style={{ color: "red", marginTop: "5px" }}>{errors.phone}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </main>
  );
}

export default DetailsForm;
