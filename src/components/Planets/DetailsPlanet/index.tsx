import { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import HeightIcon from "@mui/icons-material/Height";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GrassIcon from "@mui/icons-material/Grass";
import WaterIcon from "@mui/icons-material/Water";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import {
  DashboardContext,
  IPlanets,
} from "../../../contexts/DashboardProvider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#111",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

const DetailsPlanet = () => {
  const { open, setOpen, handleClose } = useContext(DashboardContext);

  const [planet, setPlanet] = useState<IPlanets>({} as IPlanets);

  const { id } = useParams();

  useEffect(() => {
    api.get(`planets/${id}`).then((res) => setPlanet({ ...res.data }));
  }, [id]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} height={"60vh"} borderRadius="8px">
            <CloseIcon onClick={() => setOpen(false)} sx={{color: "white"}} />
            <Typography
              fontFamily={"jedi"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
              color="white"
            >
              {planet.name}
            </Typography>
            <Typography
              color="white"
              fontFamily={"jedi"}
              fontSize=".75rem"
              id="transition-modal-description"
              sx={{ mt: 2 }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <AccessTimeIcon /> Período de rotação: {planet.rotation_period}
            </Typography>
            <Typography
              color="white"
              fontFamily={"jedi"}
              fontSize=".75rem"
              id="transition-modal-description"
              sx={{ mt: 2 }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <PublicIcon />
              Período orbital: {planet.orbital_period}
            </Typography>
            <Typography
              color="white"
              fontFamily={"jedi"}
              fontSize=".75rem"
              id="transition-modal-description"
              sx={{ mt: 2 }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <HeightIcon />
              Diâmetro: {planet.diameter}
            </Typography>
            <Typography
              color="white"
              fontFamily={"jedi"}
              fontSize=".75rem"
              id="transition-modal-description"
              sx={{ mt: 2 }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <WbSunnyIcon />
              Clima: {planet.climate}
            </Typography>
            <Typography
              color="white"
              fontFamily={"jedi"}
              fontSize=".75rem"
              id="transition-modal-description"
              sx={{ mt: 2 }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <GrassIcon />
              Terreno: {planet.terrain}
            </Typography>
            <Typography
              color="white"
              fontFamily={"jedi"}
              fontSize=".75rem"
              id="transition-modal-description"
              sx={{ mt: 2 }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <WaterIcon />
              Água da superfície: {Number(planet.surface_water) * 1000000} L³
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailsPlanet;
