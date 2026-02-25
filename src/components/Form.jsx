import React, { useState } from "react";
import Sty_form from "./Form.module.css";
import AnimatedButton from "./AnimatedButton";

const ConsultationForm = () => {

  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    
    setErrors({ ...errors, [name]: "" });
  };

  
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    return newErrors;
  };

 
 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setStatus("");
    return;
  }

  setStatus("⏳ Submitting...");
  setLoading(true);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(`/send-booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const result = await response.json();

    if (response.ok) {
      setStatus("Thank Your! Consultation request submitted successfully!");
      setFormData({ fullName: "", phone: "", email: "" });
    } else {
      setStatus("❌ Error: " + (result.error || 'Something went wrong'));
    }
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      setStatus("⏱️ Request timed out. Please try again.");
    } else {
      setStatus("❌ Network error. Please check your connection and try again.");
    }
  }

  setLoading(false);
};




  return (
    <div className={Sty_form.sty_form_container}>
      <form
        className={Sty_form.sty_form_wrapper}
        onSubmit={handleSubmit}
      >

      
        <div className={Sty_form.sty_form_group}>
          <label className={Sty_form.sty_form_label}>Full Name</label>
          <input
            className={Sty_form.sty_form_input}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.fullName}
            </p>
          )}
        </div>

        
        <div className={`${Sty_form.sty_form_group} ${Sty_form.sty_form_active}`}>
          <label className={Sty_form.sty_form_label}>Phone Number</label>
          <input
            className={Sty_form.sty_form_input}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.phone}
            </p>
          )}
        </div>

     
        <div className={Sty_form.sty_form_group}>
          <label className={Sty_form.sty_form_label}>Email ID</label>
          <input
            className={Sty_form.sty_form_input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email ID"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.email}
            </p>
          )}
        </div>


        <div className={Sty_form.sty_form_button_container}     onClick={handleSubmit}  
    
    disabled={loading}    >
          
          <AnimatedButton
            bgColor="#DD9233"
            textColor="white"
            hoverBg="rgb(205, 138, 49)"
            hoverText="#ffffff"
            showPopup={false}
            type="button"  
 
          />
           
           

        

        </div>
       <div>
        {status && (
  <h2 
    style={{ 
      color: status.includes("✅") ? "green" : 
             status.includes("⏳") ? "#f59e0b" : "red", 
      fontSize: "16px", 
      marginTop: "10px",
      textAlign: "center"
    }}
  >
    {status}
  </h2>
)}

       </div>

 
      </form>
    </div>
  );
};

export default ConsultationForm;