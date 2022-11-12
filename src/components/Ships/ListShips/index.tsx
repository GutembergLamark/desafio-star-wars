import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { IoIosShareAlt } from "react-icons/io";

import getShips from "../../../services/api/getShips";
import InfiniteScroll from "../../InfiniteScroll";

import { Main, Ship } from "./style";
import { DashboardContext, IShips } from "../../../contexts/DashboardProvider";
import { FormContext } from "../../../contexts/FormProvider";

const ListShips = () => {
  const [ships, setShips] = useState<IShips[]>([]);
  const { page, setPage, handleOpen } = useContext(DashboardContext);
  const { isLogin } = useContext(FormContext);

  useEffect(() => {
    page !== 0 &&
      getShips(page).then((res) => {
        setShips([...ships, ...res.results]);
      });
  }, [page]);

  return (
    <>
      <Outlet />
      <Main>
        <Ship>
          {ships &&
            ships.map((ship, index) => {
              const id = ship.url
                .substring(ship.url.length - 3)
                .replace("/", "");
              return (
                <li key={index}>
                  <h2>{ship.name}</h2>
                  <span>Fabricante: {ship.manufacturer}</span>
                  <Link
                    to={isLogin ? `/ships/${id}` : "/login"}
                    onClick={() => handleOpen()}
                  >
                    Detalhes <IoIosShareAlt />
                  </Link>
                </li>
              );
            })}
        </Ship>
      </Main>
      <InfiniteScroll callback={() => setPage((oldPage) => oldPage + 1)} />
    </>
  );
};

export default ListShips;
