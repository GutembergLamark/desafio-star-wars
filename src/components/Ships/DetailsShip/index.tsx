import { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupsIcon from "@mui/icons-material/Groups";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ClassIcon from "@mui/icons-material/Class";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { DashboardContext, IShips } from "../../../contexts/DashboardProvider";

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

const DetailsShip = () => {
  const { open, setOpen, handleClose } = useContext(DashboardContext);

  const [ship, setShip] = useState<IShips>({} as IShips);

  const { id } = useParams();

  useEffect(() => {
    api.get(`starships/${id}`).then((res) => setShip({ ...res.data }));
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
            <CloseIcon onClick={() => setOpen(false)} sx={{ color: "white" }} />
            <Typography
              fontFamily={"jedi"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
              color="white"
            >
              {ship.name}
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
              <RocketLaunchIcon /> Modelo: {ship.model}
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
              <EngineeringIcon />
              Fabricante: {ship.manufacturer}
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
              <AttachMoneyIcon />
              Valor: {ship.cost_in_credits}
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
              <GroupsIcon />
              Tripulação: {ship.crew}
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
              <WarningAmberIcon />
              Capacidade máxima: {ship.cargo_capacity}
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
              <ClassIcon />
              Classe da nave estelar: {ship.starship_class}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailsShip;
