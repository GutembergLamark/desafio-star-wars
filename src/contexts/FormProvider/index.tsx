import { createContext } from "react";

import { IProps } from "..";

export const FormContext = createContext({});

const FormProvider = ({ children }: IProps) => {
  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};

export default FormProvider;
