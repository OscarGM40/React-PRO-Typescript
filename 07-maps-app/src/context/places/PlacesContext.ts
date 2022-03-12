import { createContext } from "react";
import { Feature } from "../../interfaces/places";



export interface PlacesContextProps {
  isLoading: boolean
  userLocation?: [number, number] 
  searchPlacesByTerm: (term: string) => Promise<Feature[]>
  /* fijate que puedo poner places ya que sé que si existe */
  /* al final esta interfaz es una copia de la que tipa a INITIAL_STATE,diria que hasta podia haberme ahorrado ésta y usar la del Provider,aunque teóricamente no son lo mismo */
  places:Feature[]
  isLoadingPlaces: boolean
}

export const PlacesContext = createContext({} as PlacesContextProps);