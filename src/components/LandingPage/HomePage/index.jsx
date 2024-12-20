import React, { useEffect, useState } from "react";
import TextboxMain from "./TextboxMain";
import TextboxServices from "./TextboxServices";
import TextboxContact from "./TextboxContact";
import NextSection from "./NextSection";

const HomePage = () => {
  const [showServices, setServices] = useState(false);
  const [showContact, setContact] = useState(false);
  const [header, setHeader] = useState("Hello");

  useEffect(() => {
    const jsonData = {message: "Goodbye"};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    };
    fetch("http://localhost:8000/api", options)
      .then((res) => res.json())
      .then((data) => setHeader(data.message));
  }, [])

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
        header={header}
      />
      <TextboxServices show={showServices} />
      <TextboxContact show={showContact} />
      <NextSection />
    </div>
  );
};

export default HomePage;
