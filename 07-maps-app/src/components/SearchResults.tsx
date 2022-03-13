import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./";

export const SearchResults = () => {
  const { places, isLoadingPlaces,userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    map?.flyTo({
      center: [lng, lat],
      zoom: 15,
    });
    setActiveId(place.id);
  };

  const getRoute = (place: Feature) => {
    if(!userLocation) return;

    const [lng, lat] = place.center;
    getRouteBetweenPoints([userLocation[1], userLocation[0]], [lng, lat]);
   
  }

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }
  if (places.length === 0) {
    return <></>;
  }
  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            place.id === activeId ? "active rounded" : ""
          }`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.text_es}</h6>
          <p className="" style={{ fontSize: 12 }}>
            {place.place_name}
          </p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              place.id === activeId ? "btn-light" : "btn-primary"
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
