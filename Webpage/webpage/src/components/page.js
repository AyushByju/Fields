import React, { useState } from 'react';
import './page.css';
import companiesData from './companies.json';

function LoginForm() {
  const [companyInput, setCompanyInput] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    title: '',
    topicsOfInterest: '',
    province: '',
    city: '',
    country: '',
    postalCode: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCompanyInputChange = (event) => {
    const input = event.target.value;
    setCompanyInput(input);
    setFilteredCompanies(companiesData.filter(company => company.CompanyName.toLowerCase().startsWith(input.toLowerCase())));
  };

  const handleCompanySelect = (companyName) => {
    setCompanyInput(companyName);
    setFilteredCompanies([]);
    setFormData(prevState => ({
      ...prevState,
      company: companyName
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="register-box">
        <h2>CFIN Enrollment</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="reg-email">Email</label>
          <input type="email" id="reg-email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleInputChange} required />

          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />

          <label htmlFor="topics-of-interest">Topics of Interest</label>
          <input type="text" id="topics-of-interest" name="topicsOfInterest" value={formData.topicsOfInterest} onChange={handleInputChange} />

          <label htmlFor="company">Company</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            value={companyInput} 
            onChange={handleCompanyInputChange} 
            required 
          />
          {companyInput && filteredCompanies.length > 0 && (
              <ul className="company-dropdown">
                  {filteredCompanies.map((company, index) => (
                      <li key={index} onClick={() => handleCompanySelect(company.CompanyName)}>{company.CompanyName}</li>
                  ))}
              </ul>
          )}

          <label htmlFor="province">Province</label>
          <input type="text" id="province" name="province" value={formData.province} onChange={handleInputChange} />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />

          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />

          <label htmlFor="postal-code">Postal Code</label>
          <input type="text" id="postal-code" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
