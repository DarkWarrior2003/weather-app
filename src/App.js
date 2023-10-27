import React from "react";
import "./App.css";
import clearweather from "./componenets/clear.png";

function App() {
  const api = "b9eb8fca46e535104e4d0b542e2cd6c7";

  const checkweather = async () => {
    const searchBox = document.querySelector(".form-control");
    if (searchBox.value === "") {
      return 0;
    }
    const apiurl =
      "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const data = await fetch(apiurl + searchBox.value + `&appid=${api}`);
    let getdata = await data.json();
    console.log(getdata);
    document.querySelector(".city").innerHTML = getdata.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(getdata.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      Math.floor(getdata.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = getdata.wind.speed + " km/h";
    document.querySelector(".content").style.display = "block";
  };

  return (
    <>
      <div className="container my-4 d-flex justify-content-center">
        <div className="card mt-5 p-4 shadow p-3 mb-5 bg-white rounded">
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the location"
              style={{
                fontSize: "12px",
                fontFamily: "sans-serif",
                borderRadius: "20px",
              }}
            />
            <div className="input-group-append mx-2">
              <button className="btn btn-primary" onClick={checkweather}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="container text-center my-2 content">
            <img src={clearweather} alt="clear" style={{ width: "40%" }} />
            <h2 className="my-2 temp" style={{ color: "white" }}>
              22°C
            </h2>
            <h3 className="city" style={{ color: "white" }}>
              London
            </h3>
            <div className="container mt-5 d-flex justify-content-between">
              <div className="d-flex">
                <i
                  className="fa-solid fa-wind"
                  style={{ color: "#BDC3C7", fontSize: "30px" }}
                ></i>
                <p
                  className="mx-2"
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "11px",
                  }}
                >
                  <span className="wind">5km/h</span> <br />
                  Wind
                </p>
              </div>

              <div className="d-flex">
                <i
                  className="fa-solid fa-water"
                  style={{ color: "#BDC3C7", fontSize: "30px" }}
                ></i>
                <p
                  className="mx-2"
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "11px",
                  }}
                >
                  <span className="humidity">50%</span> <br />
                  Humidity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
