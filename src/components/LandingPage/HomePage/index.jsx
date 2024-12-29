import React, { useEffect, useRef, useState } from "react";
import TextboxMain from "./TextboxMain";
import TextboxServices from "./TextboxServices";
import TextboxContact from "./TextboxContact";
import NextSection from "./NextSection";
import ReCAPTCHA from "react-google-recaptcha";

const HomePage = () => {
  const [showServices, setServices] = useState(false);
  const [showContact, setContact] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [contactDetails, setContactDetails] = useState(null)
  const recaptchaRef = useRef();
  const key = process.env.REACT_APP_SITE_KEY
  const mainTextboxContainer = document.getElementById("main-textbox")

  useEffect(() => {
    if (recaptchaToken) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({recaptchaToken}),
      };
      fetch("http://localhost:8000/api", options)
        .then((res) => res.json())
        .then((data) => setContactDetails(data));
    }
  }, [recaptchaToken]);

  useEffect(() => {
    if (mainTextboxContainer) {
      mainTextboxContainer.classList.remove("border-radius-changed")
      if (showContact || showServices) {
        mainTextboxContainer.classList.add("border-radius-changed")
      }
    }
  }, [showContact, showServices, mainTextboxContainer])

  function clickedServices() {
    setContact(false);
    setServices(!showServices);
  }

  function clickedContact() {
    setServices(false);
    setContact(!showContact);
    recaptchaRef.current.execute();
  }

  function handleChange(value) {
    setRecaptchaToken(value);
  }

  function asyncScriptOnLoad() {
    setRecaptchaReady(true);
  }

  return (
    <div className="home-page container">
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={key}
        onChange={handleChange}
        asyncScriptOnLoad={asyncScriptOnLoad}
      />
      <TextboxMain
        clickedServices={clickedServices}
        clickedContact={clickedContact}
        isReady={recaptchaReady}
      />
      <TextboxServices show={showServices} />
      <TextboxContact show={showContact} details={contactDetails} />
      <NextSection />
    </div>
  );
};

export default HomePage;
