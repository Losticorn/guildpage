import React from "react";
import GenerateDIV from "./GenerateDIV-version-2";
import CardBoostServices from "./Card-services";

function Services() {
  return (
    <section id="services" className="services">
      <h1>Services</h1>
      <p>Our guild can provide you with all kinds of services. You pick!</p>
      <div>
        <GenerateDIV></GenerateDIV>
      </div>
    </section>
  );
}

export default Services;
