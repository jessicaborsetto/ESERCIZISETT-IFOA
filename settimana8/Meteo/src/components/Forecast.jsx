import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Forecast({ search }) {
  const [forecast, setForecast] = useState(null);

  const apiForecast = {
    key: "60500f103a9cf146bfe136985271a802",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(
          `${apiForecast.base}forecast?q=${search}&units=metric&appid=${apiForecast.key}`
        );
        const result = await response.json();
        const currentDate = new Date();

        // Filtra le previsioni che corrispondono ai prossimi 7 giorni
        const filteredForecast = (result.list ?? []).filter((forecastItem) => {
          const forecastDate = new Date(forecastItem.dt_txt);
          const timeDifference = forecastDate.getTime() - currentDate.getTime();
          const daysDifference = timeDifference / (1000 * 3600 * 24);

          // Mostra solo le previsioni per i prossimi 7 giorni
          return daysDifference >= 0 && daysDifference < 7;
        });

        setForecast(filteredForecast);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  const data = (forecast || []).map((forecastItem) => ({
    name: forecastItem.dt_txt,
    temperature: forecastItem.main.temp,
  }));

  return (
    <>

      {/* GRAFICO */}
      <LineChart width={700} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="temperature" stroke="#968d5f" />
        <Tooltip />
        <Legend />
      </LineChart>

      <Accordion defaultActiveKey="0" className="Accordion">
        {forecast &&
          forecast.map((forecastItem, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{forecastItem.dt_txt}</Accordion.Header>
              <Accordion.Body>
                <p>Descrizione: {forecastItem.weather[0].description}</p>
                <p>Temperatura: {forecastItem.main.temp}°C</p>
                <p>Percepita: {forecastItem.main.feels_like}°C</p>
                <p>Umidità: {forecastItem.main.humidity}°C</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>


    </>
  );
}

export default Forecast;