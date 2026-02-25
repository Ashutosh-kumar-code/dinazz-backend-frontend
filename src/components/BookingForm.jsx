import React, { useState } from "react";
  import styles from "./BookingForm.module.css";


  const BookingForm = ({ onClose }) => {

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
    return;
  }
  setLoading(true);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(`http://localhost:5000/send-booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    const result = await response.json();
    if (response.ok) {
      alert("✅ Booking submitted successfully!");
      setFormData({ fullName: "", phone: "", email: "" });
      onClose();
    } else {
      alert('❌ Error: ' + (result.error || 'Not submitted. Please try again.'));
    }
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      alert("⏱️ Request timed out. Please check your connection and try again.");
    } else {
      alert("❌ Network error. Please check your connection and try again.");
    }
  }
  setLoading(false);
};
















    return (
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={styles.popupCard}
          onClick={(e) => e.stopPropagation()}
        >

      
          <button className={styles.closeBtn} onClick={onClose}>
            ✖
          </button>

          <div className={styles.cardContent}>

          
            <div className={styles.leftSection}>
              <div className={styles.brandingText}>
                <h1 className={styles.italicTitle}>Glow.</h1>
                <h1 className={styles.italicTitle}>Grow.</h1>
                <h1 className={styles.italicTitle}>Transform.</h1>
                <p className={styles.subTitle}>Book An Appointment Today!</p>
              </div>
            </div>

          
            <div className={styles.rightSection}>
              <form className={styles.form} onSubmit={handleSubmit}>

              
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input
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

            
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    maxLength="10"
                  />
                  {errors.phone && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

              
                <div className={styles.inputGroup}>
                  <label>Email ID</label>
                  <input
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

    
                <button
                  type="submit"
                  className={styles.bookBtn}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Book A Call"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    );
  };

  export default BookingForm;