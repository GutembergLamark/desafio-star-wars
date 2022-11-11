import { useEffect, useState } from "react";

import api from "../../services/api";

import { Ship } from "./style";

interface IShips {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: [];
  films: [];
  created: string;
  edited: string;
  url: string;
}

const Ships = () => {
  const [ships, setships] = useState<IShips[]>([]);

  useEffect(() => {
    api
      .get("/starships")
      .then((res) => setships(res.data.results))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <main>
        <ul>
          {ships &&
            ships.map((ship, index) => {
              console.log(ship);
              return (
                <Ship key={index}>
                  <h2>{ship.name}</h2>
                  <span>Data de Nascimento: {ship.name}</span>
                </Ship>
              );
            })}
        </ul>
      </main>
    </>
  );
};

export default Ships;
