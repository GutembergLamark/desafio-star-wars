import { useEffect, useState } from "react";

import api from "../../services/api";

import { Planet } from "./styles";

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

const Planets = () => {
  const [planets, setPlanets] = useState<IPlanets[]>([]);

  useEffect(() => {
    api
      .get("/planets")
      .then((res) => setPlanets(res.data.results))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <main>
        <ul>
          {planets &&
            planets.map((planet, index) => {
              return (
                <Planet key={index}>
                  <h2>{planet.name}</h2>
                  <span>Data de Nascimento: {planet.name}</span>
                </Planet>
              );
            })}
        </ul>
      </main>
    </>
  );
};

export default Planets;
