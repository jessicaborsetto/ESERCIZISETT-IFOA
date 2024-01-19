import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Forecast from "./Forecast";
import Data from "./Data";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';


function Search() {
  const api = {
    key: "bd3aaad6e199db47143456ac727463c5",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  //stato per la search bar
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    main: { temp: "" },
    weather: [{ main: "", description: "" }],
  });

  const searchCity = async () => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&appid=${api.key}`
      );
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar className="navBar">
        <Data className="CurrentData"></Data>
        <div className="d-flex justify-content-between align-items-center search">
            <div>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search the city"
                    className="me-2 input rounded-pill"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant="outline-dark" onClick={searchCity} className="rounded-circle">
                    <i className="bi bi-search searchIcon"></i>
                    </Button>
                </Form>
            </div>
        </div>
      </Navbar>

      <div className="myWeather">
      {/* LOCATION */}
      <h2>{weather.name}</h2>
      {/* TEMPERATURE */}
        <hr />
      {weather.main.temp !== "" && <p>  Temperature: {weather.main.temp}°C</p>}
      {/* CONDITION */}
      {weather.weather[0].main !== "" && (
        <p>{weather.weather[0].main}: {weather.weather[0].description}</p>
        )}

        {/* AGGIUNGERE PERCEPITA E UMIDITA */}

        </div>

      <Forecast search={search}></Forecast>
    </>
  );
}

export default Search;
