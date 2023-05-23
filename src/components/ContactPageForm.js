import React from "react";
import styles from "../styles/Contact.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "@mui/joy/Button";

const ContactPageForm = () => {
  return (
    <Form className={styles.Form}>
      <h2 className={styles.Title}>Get in touch</h2>
      <Row className={styles.Row}>
        <Col className={styles.Col}>
          <Form.Label className={styles.FormLabel}>First name</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            required
            placeholder="First name"
          />
        </Col>
        <Col className={styles.Col}>
          <Form.Label className={styles.FormLabel}>Last name</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            required
            placeholder="Last name"
          />
        </Col>
      </Row>
      <Row className={styles.Row}>
        <Col className={styles.Col}>
          <Form.Label className={styles.FormLabel}>Email</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="email"
            required
            placeholder="Email"
          />
        </Col>
        <Col className={styles.Col}>
          <Form.Label className={styles.FormLabel}>Email</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="tel"
            required
            placeholder="Phone"
          />
        </Col>
      </Row>
      <Button className={styles.Button} type="submit" variant="solid">
        Submit
      </Button>
    </Form>
  );
};

export default ContactPageForm;
