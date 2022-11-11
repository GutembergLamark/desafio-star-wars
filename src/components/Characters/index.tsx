import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosShareAlt } from "react-icons/io";

import { Character, Main } from "./style";
import getCharacters from "../../services/api/getCharacters";

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

const Characters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);
  const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCharacters(page).then((res) => {
      setCharacters([...characters, ...res.results]);
    });
  }, [page]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        setPage((oldPage) => oldPage + 1);
      }
    });

    if (divInfiniteScrollRef.current) {
      intersectionObserver.observe(divInfiniteScrollRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiniteScrollRef]);

  return (
    <>
      <Main>
        <Character>
          {characters &&
            characters.map((character: ICharacter, index) => {
              return (
                <li key={index}>
                  <h2>{character.name}</h2>
                  <span>Data de Nascimento: {character.birth_year}</span>
                  <Link to={`/characters/${index + 1}`}>
                    Detalhes <IoIosShareAlt />
                  </Link>
                </li>
              );
            })}
        </Character>
      </Main>
      <div ref={divInfiniteScrollRef}>.</div>
    </>
  );
};

export default Characters;
