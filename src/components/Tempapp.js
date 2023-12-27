/** @format */

import React, { useState, useEffect } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    if (search.length !== 0) {
      const fetchApi = async () => {
        try {

          const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=017d4fd83813a0bdc966d7c32cb5a939`;
          const response = await fetch(url);

          const resJson = await response.json();
          if (resJson.cod !== 200) {
            const err = 'not found';
            throw err;

          }
          setCity(resJson.main);

        }
        catch (err) {
          setCity(null);
        }

      };

      fetchApi();

    }

  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">

          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg"> No Data Found </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa fa-street-view"> </i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                {" "}
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel{" "}
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
