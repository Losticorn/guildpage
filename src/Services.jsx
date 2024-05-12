import React from "react";
import CardBoostServices from "./Card-services";

function Services() {
  return (
    <section id="services" className="services">
      <h1>Services</h1>
      <p>Our guild can provide you with all kinds of services. You pick!</p>
      <CardBoostServices></CardBoostServices>
      <div className="cart">
        <h2>Your cart is empty!</h2>
        <button>Order</button>
      </div>
    </section>
  );
}

export default Services;
