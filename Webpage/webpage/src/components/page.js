import React, { useState } from 'react';
import './page.css';
import companiesData from './companies.json';

function LoginForm() {
  const [companyInput, setCompanyInput] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  // Sample list of companies
  const companies = ["Example Co", "Epsilon Ltd", "Acme Corp", "Echo Inc", "Elite Services", "Apple Corp", "Byke store"];

  const handleCompanyInputChange = (event) => {
    const input = event.target.value;
    setCompanyInput(input);
    setFilteredCompanies(companiesData.filter(company => company.CompanyName.toLowerCase().startsWith(input.toLowerCase())));
  };


  const handleCompanySelect = (companyName) => {
    setCompanyInput(companyName);
    setFilteredCompanies([]);
};


  return (
    <div className="container">
        <div className="register-box">
            <h2>Register</h2>
            <form>
                <label htmlFor="reg-email">Email</label>
                <input type="email" id="reg-email" name="reg-email" required />

                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />

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
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" required />

                <button type="submit">Create Account</button>
            </form>
        </div>
    </div>
  );
}

export default LoginForm;
