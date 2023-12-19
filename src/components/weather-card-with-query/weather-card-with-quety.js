import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBTypography,
    MDBIcon,
} from "mdb-react-ui-kit";

import getIcon from "../../service/weather-icons-service";
import apiservice from "../../service/api-service";

export default function WeatherCardQuery({ query }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (query) {
                    setLoading(true);
                    const result = await apiservice.getCurrentWeather(query);
                    setData(result);
                }
            } catch (error) {
                console.error("Error fetching weather:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="weather-card-container">
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
                <MDBCardBody className="p-4">
                    <div className="d-flex">
                        <MDBTypography tag="h6" className="flex-grow-1">
                            {data.location && data.location.name}
                        </MDBTypography>
                        <MDBTypography tag="h6">{data.location && data.location.localtime.slice(8, 10)}</MDBTypography>
                    </div>

                    <div className="d-flex flex-column text-center mt-5 mb-4">
                        <MDBTypography
                            tag="h6"
                            className="display-4 mb-0 font-weight-bold"
                            style={{ color: "#1C2331" }}
                        >
                            {" "}
                            {data.current && data.current.temp_c}°C{" "}
                        </MDBTypography>
                        <span className="small" style={{ color: "#868B94" }}>
                            {data.current && data.current.condition.text}
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
                                <span className="ms-1"> {data.current && data.current.wind_kph} km/h</span>
                            </div>
                            <div>
                                <MDBIcon
                                    fas
                                    icon="tint fa-fw"
                                    style={{ color: "#868B94" }}
                                />{" "}
                                <span className="ms-1"> {data.current && data.current.pressure_in} </span>
                            </div>
                            <div>
                                <MDBIcon
                                    fas
                                    icon="sun fa-fw"
                                    style={{ color: "#868B94" }}
                                />{" "}
                                <span className="ms-1"> {data.current && data.current.uv}h </span>
                            </div>
                        </div>
                        <div>
                            {data.current && (
                                <img
                                    className="weather-card-icon"
                                    src={getIcon(data.current && data.current.condition.icon)}
                                    alt="Weather Icon"
                                    width="100px"
                                />
                            )
                            }
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}
