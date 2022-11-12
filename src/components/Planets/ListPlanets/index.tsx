import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { IoIosShareAlt } from "react-icons/io";

import getPlanets from "../../../services/api/getPlanets";
import InfiniteScroll from "../../InfiniteScroll";

import { Main, Planet } from "./styles";
import { DashboardContext, IPlanets } from "../../../contexts/DashboardProvider";
import { FormContext } from "../../../contexts/FormProvider";


const ListPlanets = () => {
  const [planets, setPlanets] = useState<IPlanets[]>([]);
  const { page, setPage, handleOpen } = useContext(DashboardContext);
  const { isLogin } = useContext(FormContext);

  useEffect(() => {
    page !== 0 &&
      getPlanets(page).then((res) => {
        setPlanets([...planets, ...res.results]);
      });
  }, [page]);

  return (
    <>
      <Outlet />
      <Main>
        <Planet>
          {planets &&
            planets.map((planet, index) => {
              const id = planet.url
                .substring(planet.url.length - 3)
                .replace("/", "");
              return (
                <li key={index}>
                  <h2>{planet.name}</h2>
                  <span>População: {planet.population}</span>
                  <Link
                    to={isLogin ? `/planets/${id}` : "/login"}
                    onClick={() => handleOpen()}
                  >
                    Detalhes <IoIosShareAlt />
                  </Link>
                </li>
              );
            })}
        </Planet>
      </Main>
      <InfiniteScroll callback={() => setPage((oldPage) => oldPage + 1)} />
    </>
  );
};

export default ListPlanets;
