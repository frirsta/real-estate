import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from '@mui/joy/Button';
import HeroImage from '../assets/contact/hero.jpg';
import Hero from '../components/Hero';
import styles from '../styles/Contact.module.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

const Contact = () => {
  return (
    <div>
    <Hero src={HeroImage} text={'Contact'} />
    <div className={styles.HorizontalLine}></div>
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
    <Form className={styles.Form}>
    <h2 className={styles.Title}>Get in touch</h2>
    <Row className={styles.Row}>
      <Col className={styles.Col}>
      <Form.Label className={styles.FormLabel}>First name</Form.Label>
        <Form.Control className={styles.FormInput} type='text' required placeholder="First name" />
      </Col>
      <Col className={styles.Col}>
        <Form.Label className={styles.FormLabel}>Last name</Form.Label>
        <Form.Control className={styles.FormInput} type='text' required placeholder="Last name" />
      </Col>
    </Row>
    <Row className={styles.Row}>
      <Col className={styles.Col}>
        <Form.Label className={styles.FormLabel}>Email</Form.Label>
        <Form.Control className={styles.FormInput} type='email' required placeholder="Email" />
      </Col>
      <Col className={styles.Col}>
        <Form.Label className={styles.FormLabel}>Email</Form.Label>
        <Form.Control className={styles.FormInput} type='tel' required placeholder="Phone" />
      </Col>
    </Row>
    <Button className={styles.Button} type='submit' variant="solid">Submit</Button>
  </Form>
  </div>
  <div className={styles.ContactInformation}>
    <div className={styles.ContactDetails}>
      <div className={styles.Icon}>
<LocalPhoneIcon /> +1-202-555-0104</div>
<div className={styles.Icon}>
<PlaceIcon /> Somerset St, New Brunswick, New Mexico</div>
<div className={styles.Icon}>
<EmailSharpIcon /> info@mail.com</div>
</div>
  </div>
  </div>
  </div>
  )
}

export default Contact
