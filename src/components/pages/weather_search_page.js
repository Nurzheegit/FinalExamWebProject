// main.js
import React from "react";
import Header from "../contact-form/Header";
import ContactForm from "../contact-form/contact-form";
import Footer from "../contact-form/Footer";
import styles from "../stylesheets/contact_page.css"; // Добавляем импорт стилей

const SearchPage = () => {
  return (
    <div className={styles.contact_page}>
      <Header />
      <ContactForm />
    </div>
  );
};

export default SearchPage;
