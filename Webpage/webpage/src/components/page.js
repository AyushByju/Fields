import React, { useState } from 'react';
import './page.css';

function LoginForm() {
  const [companyInput, setCompanyInput] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  // Sample list of companies
  const companies = ["Example Co", "Epsilon Ltd", "Acme Corp", "Echo Inc", "Elite Services", "Apple Corp", "Byke store"];

  const handleCompanyInputChange = (event) => {
    const input = event.target.value;
    setCompanyInput(input);
    setFilteredCompanies(companies.filter(company => company.toLowerCase().startsWith(input.toLowerCase())));
  };

  const handleCompanySelect = (company) => {
    setCompanyInput(company);
    setFilteredCompanies([]);
  };

  return (
    <div className="container">
        <div className="login-box">
            <h2>Sign In</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Sign In</button>
            </form>
        </div>

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
                      <li key={index} onClick={() => handleCompanySelect(company)}>{company}</li>
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
