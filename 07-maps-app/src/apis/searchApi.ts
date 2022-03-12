import axios from 'axios';


const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params:{
    limit:5,
    language:'es',
    access_token: "pk.eyJ1Ijoib3NjYXJnbTQwIiwiYSI6ImNsMGlodzVldDAyeXMzZHA2NGZ1cHg1bTEifQ.T0pHpl7PK3jMnnt9McgRFw"
  }
})

export default searchApi;