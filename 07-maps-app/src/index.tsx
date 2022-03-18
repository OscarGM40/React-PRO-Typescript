import ReactDOM from "react-dom";
import { MapsApp } from "./MapsApp";
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import "./styles.css";


  mapboxgl.accessToken = "pk.eyJ1Ijoib3NjYXJnbTQwIiwiYSI6ImNsMGlodzVldDAyeXMzZHA2NGZ1cHg1bTEifQ.T0pHpl7PK3jMnnt9McgRFw";

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
  throw new Error("Geolocation is not supported by your browser");
}

ReactDOM.render(<MapsApp />, document.getElementById("root"));
