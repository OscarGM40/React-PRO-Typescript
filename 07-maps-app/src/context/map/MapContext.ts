//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map } from "!mapbox-gl";
import { createContext } from "react";
import { DirectionsResponse } from "../../interfaces/directions";


interface MapContextProps {
  isMapReady: boolean;
  map?: Map;

  /* methods */
  setMap: (map: Map) => void;
  getRouteBetweenPoints:(start:[number, number], end:[number, number]) => Promise<DirectionsResponse>
}

export const MapContext = createContext({} as MapContextProps);