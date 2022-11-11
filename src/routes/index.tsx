import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListCharacters from "../pages/ListCharacters";
import ListPlanets from "../pages/ListPlanets";
import ListShips from "../pages/ListShips";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<ListCharacters />} />
      <Route path="/ships" element={<ListShips />} />
      <Route path="/planets" element={<ListPlanets />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Router;
