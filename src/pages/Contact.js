import React from "react";
import HeroImage from "../assets/contact/hero.jpg";
import Hero from "../components/Hero";
import styles from "../styles/Contact.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import ContactPageForm from "../components/ContactPageForm";

const Contact = () => {
  return (
    <div>
      <Hero src={HeroImage} text={"Contact"} />
      <div className={styles.HorizontalLine}></div>
      <div className={styles.Container}>
        <div className={styles.FormContainer}>
          <ContactPageForm />
        </div>
        <div className={styles.ContactInformation}>
          <div className={styles.ContactDetails}>
            <div className={styles.Icon}>
              <LocalPhoneIcon /> +1-202-555-0104
            </div>
            <div className={styles.Icon}>
              <PlaceIcon /> Somerset St, New Brunswick, New Mexico
            </div>
            <div className={styles.Icon}>
              <EmailSharpIcon /> info@mail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
