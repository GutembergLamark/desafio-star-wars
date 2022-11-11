import CardList from "../../components/CardList";
import Header from "../../components/HomePage/Header";

import { IoIosShareAlt } from "react-icons/io";
import { Main } from "./style";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />

      <Main>
        <CardList>
          <h1>Personagens</h1>
          <Link to={"/characters"}>
            Listar personagens <IoIosShareAlt />
          </Link>
        </CardList>

        <CardList>
          <h1>Naves</h1>
          <Link to={"/ships"}>
            Listar Naves <IoIosShareAlt />
          </Link>
        </CardList>

        <CardList>
          <h1>Planetas</h1>
          <Link to={"/planets"}>
            Listar Planetas <IoIosShareAlt />
          </Link>
        </CardList>
      </Main>
    </>
  );
};

export default HomePage;
