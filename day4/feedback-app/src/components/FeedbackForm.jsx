import { useState } from "react";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    feedback: ""
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
    setMessage("Form submitted successfully ✅");

    // Reset form
    setFormData({
      name: "",
      empId: "",
      feedback: ""
    });
  };

  return (
    <div className={styles.container}>
      <h2>Employee Feedback Form</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="empId"
          placeholder="Enter Employee ID"
          value={formData.empId}
          onChange={handleChange}
          required
        />

        <textarea
          name="feedback"
          placeholder="Enter Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* Success Message */}
      {message && <p className={styles.success}>{message}</p>}

      {/* Display Submitted Data */}
      {submittedData && (
        <div className={styles.output}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Emp ID:</strong> {submittedData.empId}</p>
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;