import { useContext } from "react";
import { PlacesContext } from "../context";
import { Loading } from "./Loading";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  console.log(isLoading,'isLoading');
 
  if (isLoading) {
    // console.log('ksdfjlksdjflksdj')
    return <Loading />;
  }

   return <div>{userLocation?.join(" ")}</div>;
};
