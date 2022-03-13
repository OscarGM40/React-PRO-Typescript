import axios from 'axios';


const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives:false,
    geometries:"geojson",
    overview:"simplified",
    steps:false, 
    access_token: "pk.eyJ1Ijoib3NjYXJnbTQwIiwiYSI6ImNsMGlodzVldDAyeXMzZHA2NGZ1cHg1bTEifQ.T0pHpl7PK3jMnnt9McgRFw"
  }
})

export default directionsApi;