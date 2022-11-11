import { createContext, useState } from "react";

import { IProps } from "..";

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
}

export interface IPlanets {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: [];
  films: [];
  created: string;
  edited: string;
  url: string;
}

interface IDashboardContext {
  features: ICharacter[] | IPlanets[];
  setFeatures: React.Dispatch<React.SetStateAction<ICharacter[] | IPlanets[]>>;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

const DashboardProvider = ({ children }: IProps) => {
  const [features, setFeatures] = useState<ICharacter[] | IPlanets[]>([]);

  return (
    <DashboardContext.Provider value={{ features, setFeatures }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
