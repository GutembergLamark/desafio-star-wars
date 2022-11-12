import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListCharacters from "../pages/CharactersPage";
import ListPlanets from "../pages/PlanetsPage";
import ListShips from "../pages/ShipsPage";
import DetailsCharacter from "../components/Characters/DetailsCharacter";
import DetailsPlanet from "../components/Planets/DetailsPlanet";
import DetailsShip from "../components/Ships/DetailsShip";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/characters" element={<ListCharacters />}>
        <Route path=":id" element={<DetailsCharacter />} />
      </Route>
      <Route path="/ships" element={<ListShips />}>
        <Route path=":id" element={<DetailsShip />} />
      </Route>
      <Route path="/planets" element={<ListPlanets />}>
        <Route path=":id" element={<DetailsPlanet />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Router;
