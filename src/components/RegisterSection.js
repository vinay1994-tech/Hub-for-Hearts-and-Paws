import React from "react";
import "./RegisterSection.css"; // Import CSS for styling
import Button from '@mui/material/Button';

const RegisterSection = () => {
  return (
    <section className="bgc-thm">
      <div className="container">
        <div className="row">
            <div className="text-left">
              <h4 className="h2 color-white">Register For a Hearts and Paws Account</h4>
              <p>
                Create your free account, and get ready to connect safely with thousands
                of adopters and Hearts and Paws
              </p>
            </div>
            <div className="text-right">
              <button className="text-right-btn">Register</button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default RegisterSection;
