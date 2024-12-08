import React from "react";
import "./HeroSection.css"; // Import CSS for styling

const HeroSection = () => {
  return (
    <section
      className="home-one home1_bgi1"
      style={{
        backgroundImage: "url(/headerbanner-1.jpg)",
      }}
    >
      <div className="container">
        <div className="row posr">
          <div className="col-12 col-lg-5">
            {/* Adopt a Pet Button */}
            <div className="heroButton">
              <a href="/adopt-a-pet/" className="heroButton__anchor"></a>
              <div className="heroButton__wrapper">
                <img
                  style={{ height: "auto", width: "auto" }}
                  src="/home-icon-2.png"
                  alt="Adopt a Pet"
                />
                <div className="heroButton__content">
                  <h3>I want to adopt a pet</h3>
                  <p>Search the available pets listed on Hearts and Paws</p>
                </div>
              </div>
            </div>

            {/* Rehome My Pet Button */}
            <div className="heroButton">
              <a href="/list-a-pet/" className="heroButton__anchor"></a>
              <div className="heroButton__wrapper">
                <img
                  style={{ height: "auto", width: "auto" }}
                  src="/home-icon-1.png"
                  alt="Rehome a Pet"
                />
                <div className="heroButton__content">
                  <h3>I need to rehome my pet</h3>
                  <p>
                    Start the process. It's free to list your pet on Hearts and Paws
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
