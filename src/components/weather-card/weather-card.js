
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import './weather-card.css'

export default function WeatherCard({ img, type, tempc, city, windSpeed, pressure_in, uv, date }) {
  return (
    <div className="weather-card-container">
      <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
        <MDBCardBody className="p-4">
          <div className="d-flex">
            <MDBTypography tag="h6" className="flex-grow-1">
              {city}
            </MDBTypography>
            <MDBTypography tag="h6">{date}</MDBTypography>
          </div>

          <div className="d-flex flex-column text-center mt-5 mb-4">
            <MDBTypography
              tag="h6"
              className="display-4 mb-0 font-weight-bold"
              style={{ color: "#1C2331" }}
            >
              {" "}
              {tempc}°C{" "}
            </MDBTypography>
            <span className="small" style={{ color: "#868B94" }}>
              {type}
            </span>
          </div>

          <div className="d-flex align-items-center">
            <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
              <div>
                <MDBIcon
                  fas
                  icon="wind fa-fw"
                  style={{ color: "#868B94" }}
                />{" "}
                <span className="ms-1"> {windSpeed} km/h</span>
              </div>
              <div>
                <MDBIcon
                  fas
                  icon="tint fa-fw"
                  style={{ color: "#868B94" }}
                />{" "}
                <span className="ms-1"> {pressure_in} </span>
              </div>
              <div>
                <MDBIcon
                  fas
                  icon="sun fa-fw"
                  style={{ color: "#868B94" }}
                />{" "}
                <span className="ms-1"> {uv}h </span>
              </div>
            </div>
            <div>
              <img
                className="weather-card-icon"
                src={img}
                width="100px"
              />
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );

}



