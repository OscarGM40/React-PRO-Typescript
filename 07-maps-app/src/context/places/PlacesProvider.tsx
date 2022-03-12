import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { searchApi } from "../../apis";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  isLoadingPlaces: false,
  userLocation: undefined,
  places: [],
};

type Children = {
  children: JSX.Element | JSX.Element[];
};

export const PlacesProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) return []; // limpiar state
    if (!state.userLocation) throw new Error("no hay ubicación del usuario");
    dispatch({type:'setLoadingPlaces'});

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        /*  proximity:state.userLocation[0] + "," + state.userLocation[1], */
        lat: state.userLocation[0],
        lng: state.userLocation[1],
      },
    });
    // console.log(resp.data, "resp");
    dispatch({ type: "setPlaces", payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
