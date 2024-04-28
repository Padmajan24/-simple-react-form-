import React, { useState } from 'react';
import './App.css'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }
    if (!formData.mobile) {
      errors.mobile = 'Mobile is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number should be 10 digits';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.dob) {
      errors.dob = 'Date of Birth is required';
    }
    if (!formData.course) {
      errors.course = 'Course is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert("Data stored successfully:\n" + JSON.stringify(formData, null, 2));
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
    setFormErrors({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Higher Secondary Admission Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          {formErrors.address && <span className="error">{formErrors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
          {formErrors.mobile && <span className="error">{formErrors.mobile}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formErrors.gender && <span className="error">{formErrors.gender}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          {formErrors.dob && <span className="error">{formErrors.dob}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select id="course" name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {formErrors.course && <span className="error">{formErrors.course}</span>}
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSubmit}>Register</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
