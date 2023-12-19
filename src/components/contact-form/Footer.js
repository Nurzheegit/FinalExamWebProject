// Footer.js
import React from "react";
import styles from "../stylesheets/contact_page.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className={`text-center ${styles.footer}`}>
      {/* Grid container */}  
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            className={`btn text-white btn-floating m-1 ${styles.socialIcon}`}
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/nurzhigit.asubaev.5/?locale=ru_RU"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            className={`btn text-white btn-floating m-1 ${styles.socialIcon}`}
            style={{ backgroundColor: "#55acee" }}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            className={`btn text-white btn-floating m-1 ${styles.socialIcon}`}
            style={{ backgroundColor: "#dd4b39" }}
            href="/https://www.google.kz/?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            className={`btn text-white btn-floating m-1 ${styles.socialIcon}`}
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/nnurzhigitt/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            className={`btn text-white btn-floating m-1 ${styles.socialIcon}`}
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            className={`btn text-white btn-floating m-1 ${styles.socialIcon}`}
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/Nurzheegit"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
    </footer>
  );
};

export default Footer;
