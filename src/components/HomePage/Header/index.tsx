import { useContext, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

import Logo from "../../../assets/star-wars-logo.png";
import { FormContext } from "../../../contexts/FormProvider";

import { TopHeader } from "./style";

const Header = () => {
  const [click, setClick] = useState(false);
  const { isLogin, setIsLogin } = useContext(FormContext);

  return (
    <TopHeader click={click}>
      <div className="content-header">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <div className="dropdown">
          <CgMenu onClick={() => setClick(!click)} />
          <div className="dropdown__container-button">
            <Link to={"/login"}>Entrar</Link>
            <Link to={"/register"}>Cadastrar</Link>
            {isLogin && (
              <Link
                to={"/"}
                onClick={() => {
                  setIsLogin(false);
                  localStorage.clear();
                }}
              >
                Sair
              </Link>
            )}
          </div>
        </div>
      </div>
    </TopHeader>
  );
};

export default Header;
