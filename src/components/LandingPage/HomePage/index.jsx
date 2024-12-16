import React, { useState } from "react";
import TextboxMain from "./TextboxMain";
import TextboxServices from "./TextboxServices";
import TextboxContact from "./TextboxContact";
import NextSection from "./NextSection";

const HomePage = () => {
  const [showServices, setServices] = useState(false);
  const [showContact, setContact] = useState(false);

  function clickedServices() {
    setContact(false);
    setServices(!showServices);
  }

  function clickedContact() {
    setServices(false);
    setContact(!showContact);
  }

  return (
    <div className="home-page container">
      <TextboxMain
        clickedServices={clickedServices}
        clickedContact={clickedContact}
      />
      <TextboxServices show={showServices} />
      <TextboxContact show={showContact} />
      <NextSection />
    </div>
  );
};

export default HomePage;
