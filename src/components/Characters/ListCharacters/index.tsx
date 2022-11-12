import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { IoIosShareAlt } from "react-icons/io";

import getCharacters from "../../../services/api/getCharacters";
import InfiniteScroll from "../../InfiniteScroll";

import { Character, Main } from "./style";
import {
  DashboardContext,
  ICharacter,
} from "../../../contexts/DashboardProvider";

import { FormContext } from "../../../contexts/FormProvider";

const ListCharacters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const { page, setPage, handleOpen } = useContext(DashboardContext);
  const { isLogin } = useContext(FormContext);

  useEffect(() => {
    page !== 0 &&
      getCharacters(page).then((res) => {
        setCharacters([...characters, ...res.results]);
      });
  }, [page]);

  return (
    <>
      <Outlet />
      <Main>
        <Character>
          {characters &&
            characters.map((character: ICharacter, index) => {
              const id = character.url
                .substring(character.url.length - 3)
                .replace("/", "");
              return (
                <li key={index}>
                  <h2>{character.name}</h2>
                  <span>Data de Nascimento: {character.birth_year}</span>
                  <Link
                    to={isLogin ? `/characters/${id}` : "/login"}
                    onClick={() => handleOpen()}
                  >
                    Detalhes <IoIosShareAlt />
                  </Link>
                </li>
              );
            })}
        </Character>
      </Main>
      <InfiniteScroll callback={() => setPage((oldPage) => oldPage + 1)} />
    </>
  );
};

export default ListCharacters;
