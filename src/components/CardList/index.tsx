import { ReactNode } from "react";
import { Card } from "./style";

interface IProps {
  children: ReactNode;
}

const CardList = ({ children }: IProps) => {
  return <Card>{children}</Card>;
};

export default CardList;
