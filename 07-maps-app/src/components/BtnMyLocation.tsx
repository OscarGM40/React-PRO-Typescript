import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

const BtnMyLocation = () => {
  /* recuerda que tengo al map ya con visión sobre él  */
  const {map,isMapReady} = useContext(MapContext);
  const {userLocation} = useContext(PlacesContext)
  
  const onClick = () => {
    if(!isMapReady) throw new Error("Map is not ready, please wait");
    if(!userLocation) throw new Error("No hay ubicación de usuario")

    if (isMapReady) {
      map?.flyTo({
        center: [userLocation[1], userLocation[0]],
        zoom: 11,
      });
    }
  }
  
  return (
    <button 
      onClick={onClick}  
    className="btn btn-primary" 
      style={{
      position: "fixed", //debo ser correcto es mejor fixed
      top: "10px",
      right: "10px",
      zIndex:999,
    }}>
      Mi Ubicación
    </button>
  );
};
export default BtnMyLocation;
