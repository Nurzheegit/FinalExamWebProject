// ContactForm.js
import React from "react";
import "../stylesheets/contact_form.css";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <form className="contact-container">
        <div className="leftside">
          <div className="nesolestag-enadenud">
            <div className="ico-wrap">
              <i className="fa fa-map-marker ico-contact"></i>
            </div>
            <div className="meanous-andscoev">
              <h4 className="aio-icon-title">
                <p align="left">Address:</p>
              </h4>
              <div className="aio-icon-description">
                <p align="left">International University of Information Technology</p>
              </div>
            </div>

            <span className="kesednsoled"></span>

            <div className="ico-wrap">
              <i className="fa fa-clock-o ico-contact"></i>
            </div>
            <div className="meanous-andscoev">
              <h4 className="aio-icon-title">
                <p align="left">Work schedule:</p>
              </h4>
              <div className="aio-icon-description">
                <p align="left">
                  mon.-sun. from 10:00 to 21:00
                  <br />
                  Six days a week
                </p>
              </div>
            </div>

            <span className="kesednsoled"></span>

            <div className="ico-wrap">
              <i className="fa fa-envelope ico-contact"></i>
            </div>
            <div className="meanous-andscoev">
              <h4 className="aio-icon-title">
                <p align="left">Email:</p>
              </h4>
              <div className="aio-icon-description">
                <p align="left">
                  asubaevn100@gmail.com
                  <br />
                  31107@iitu.edu.kz
                </p>
              </div>
            </div>

            <span className="kesednsoled"></span>

            <div className="ico-wrap">
              <i className="fa fa-phone ico-contact"></i>
            </div>
            <div className="meanous-andscoev">
              <h4 className="aio-icon-title">
                <p align="left">Contacts:</p>
              </h4>
              <div className="aio-icon-description">
                <p align="left">
                  +7 777 140 3595
                  <br />
                  +7 777 777 7777
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightside">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.776148051229!2d76.90707867609554!3d43.23515277936871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692f027581ad%3A0x2426740f56437e63!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C-0LPQuNC5!5e0!3m2!1sru!2skz!4v1702908084845!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </form>
    </section>
  );
};

export default ContactForm;
