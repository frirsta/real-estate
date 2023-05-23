import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/PropertyDetails.module.css";
import ContactForm from "../../components/ContactForm";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/joy/Button";
import Table from "@mui/joy/Table";
import HomeList from "../../lists/HomeList";
import Address from "../../components/Address";
import PropertyImages from "../../components/PropertyImages";
import Agent from "../../components/Agent";
import Hero from "../../components/Hero";
import HeroImage from "../../assets/propertyDetails/hero.jpg";
import ContactPageForm from "../../components/ContactPageForm";

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Hero src={HeroImage} text={HomeList[id].address} />
      <PropertyImages />
      <div className={styles.Container}>
        <div className={styles.AddressDetails}>
          <div className={styles.HomeDetailsContainer}>
            <div className={styles.Address}>
              <h2>
                {HomeList[id].address}, {HomeList[id].state}
              </h2>
              <Button className={styles.ShareButton} variant="outlined">
                <ShareIcon className={styles.ShareIcon} />
              </Button>
            </div>
            <Address
              beds={HomeList[id].beds}
              baths={HomeList[id].baths}
              area={HomeList[id].area}
            />
            <div className={styles.HorizontalLine}></div>
            <div className={styles.DetailsSection}>
              <h2>About this home</h2>
              <p>{HomeList[id].details}</p>
            </div>
            <div className={styles.PropertyDetails}>
              <h3>Property information</h3>

              <Table>
                <tbody>
                  <tr>
                    <td className={styles.TableData}>Surface</td>
                    <td className={styles.TableInformation}>N/A*</td>
                  </tr>
                  <tr>
                    <td>Rooms</td>
                    <td>N/A*</td>
                  </tr>
                  <tr>
                    <td>Bedrooms</td>
                    <td>N/A*</td>
                  </tr>
                  <tr>
                    <td>Bathrooms</td>
                    <td>N/A*</td>
                  </tr>
                  <tr>
                    <td>Floor</td>
                    <td>N/A*</td>
                  </tr>
                  <tr>
                    <td>Parking</td>
                    <td>N/A*</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={styles.DetailsContact}>
            <div>
              <ContactForm price={HomeList[id].price} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Agent
          key={HomeList[id].name}
          img={HomeList[id].agentOne}
          imgTwo={HomeList[id].agentTwo}
          imgThree={HomeList[id].agentThree}
          name={HomeList[id].agentNameOne}
          nameTwo={HomeList[id].agentNameTwo}
          nameThree={HomeList[id].agentNameThree}
        />
      </div>
      <div className={styles.ContactPageForm}>
        <ContactPageForm />
      </div>
    </div>
  );
};

export default PropertyDetails;
