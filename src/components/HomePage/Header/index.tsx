import { useState } from "react";
import { CgMenu } from "react-icons/cg";

import Logo from "../../../assets/star-wars-logo.png";

import { TopHeader } from "./style";

const Header = () => {

  const [click, setClick] = useState(false)

  return (
    <TopHeader click={click}>
      <div className="content-header">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <div className="dropdown">
          <CgMenu onClick={() => setClick(!click)}/>
          <div className="dropdown__container-button">
            <button>Entrar</button>
            <button>Cadastrar</button>
          </div>
        </div>
      </div>
    </TopHeader>
  );
};

export default Header;
