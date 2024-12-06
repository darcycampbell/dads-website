import React, { useState } from "react";
import TextboxMain from "./TextboxMain";
import TextboxSide from "./TextboxSide";
import NextSection from "./NextSection";

const HomePage = () => {
  const [showServices, setServices] = useState(false);
  const [showContact, setContact] = useState(false);

  const servicesItems = ["Service 1", "Another service"];
  const contactItems = ["Contact me", "at this", "address"];

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
      <TextboxSide show={showServices} listItems={servicesItems} />
      <TextboxSide show={showContact} listItems={contactItems} />
      <NextSection />
    </div>
  );
};

export default HomePage;