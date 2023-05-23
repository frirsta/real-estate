import Card from "react-bootstrap/Card";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "@mui/joy/Link";
import InputSubscription from "./NewsLetter";

function Footer() {
  return (
    <>
      <Card className={styles.Footer}>
        <Card.Body className={styles.FooterContainer}>
          <div className={styles.Container}>
            <div className={styles.ContactLinks}>
              <div className={styles.Contact}>
                <span className={styles.FooterTitle}>Quick Links</span>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  About us
                </Link>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  Press
                </Link>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  Support
                </Link>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  Career
                </Link>
              </div>
              <div className={styles.Contact}>
                <span className={styles.FooterTitle}>Contact us</span>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  8101 Sunland Blvd Sun Valley, California
                </Link>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  info@fakeemail.com
                </Link>
                <Link
                  className={styles.FooterLink}
                  onClick={(event) => event.preventDefault()}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  (818) 767-2050
                </Link>
              </div>
            </div>
            <div className={styles.FooterTextContainer}>
              <div className={styles.SocialMedia}>
                <span className={styles.FooterTitle}>Follor us!</span>
                <span className={styles.FooterText}>
                  Consectetur adipiscing elit. sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </span>
                <ul className={styles.FooterList}>
                  <Link target="_blank" href="https://www.facebook.com/">
                    <FacebookIcon className={styles.SocialMediaLinks} />
                  </Link>

                  <Link target="_blank" href="https://www.instagram.com/">
                    <InstagramIcon className={styles.SocialMediaLinks} />
                  </Link>

                  <Link target="_blank" href="https://www.linkedin.com/">
                    <LinkedInIcon className={styles.SocialMediaLinks} />
                  </Link>

                  <Link target="_blank" href="https://www.youtube.com/">
                    <YouTubeIcon className={styles.SocialMediaLinks} />
                  </Link>
                </ul>
              </div>
              <div className={styles.Contact}>
                <span className={styles.FooterTitle}>
                  Subscribe to our newsletter
                </span>

                <InputSubscription />
              </div>
            </div>
          </div>
          <div className={styles.FooterPageList}>
            <ul className={styles.FooterPageLinks}>
              {[
                "Home",
                "About",
                "Contact",
                "Projets",
                "Amenities",
                "Location",
              ].map((item) => (
                <Link
                  className={styles.PageLink}
                  onClick={(event) => event.preventDefault()}
                  key={item}
                  underline="hover"
                  fontSize="inherit"
                  href="/"
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Footer;
