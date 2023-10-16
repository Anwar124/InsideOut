import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactUsForm from "./ContactUsForm";
import ContactUsTop from "./ContactUsTop";
import '../CssFolder/ContactUs.css';

function ContactUs() {
  return (
  <div className="body1">
      <Header />
      <ContactUsTop />
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default ContactUs;
