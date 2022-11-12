import { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import apijwt from "../../services/login";

import { IProps } from "..";

export interface IUser {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

interface IMessageError {
  message: string;
}

export interface IErrors {
  name?: IMessageError;
  email?: IMessageError;
  password?: IMessageError;
  confirmPassword?: IMessageError;
}

interface ILogin {
  email: string;
  pasword: string;
}

interface IResgister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface IContextForm {
  submitLogin: (data: any) => void;
  submitRegister: (data: any) => void;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormContext = createContext<IContextForm>({} as IContextForm);

const FormProvider = ({ children }: IProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitLogin = (data: ILogin) => {
    apijwt
      .post("/login", data)
      .then(({ data: { token } }) => {
        localStorage.setItem("@StarWars:token", token);

        toast.success("Login efetuado com sucesso");
        setIsLogin(true);

        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário ou senha incorretos!");
      });
  };

  const submitRegister = (data: IResgister) => {
    delete data.confirmPassword;
    apijwt
      .post("/users", { ...data })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Conta criada com sucesso");
          navigate("/login", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <FormContext.Provider
      value={{ submitLogin, submitRegister, isLogin, setIsLogin }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
