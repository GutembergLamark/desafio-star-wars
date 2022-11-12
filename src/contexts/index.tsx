import { ReactNode } from "react";

import DashboardProvider from "./DashboardProvider";
import FormProvider from "./FormProvider";

export interface IProps {
  children: ReactNode;
}

const Provider = ({ children }: IProps) => {
  return (
    <DashboardProvider>
      <FormProvider>{children}</FormProvider>
    </DashboardProvider>
  );
};

export default Provider;
