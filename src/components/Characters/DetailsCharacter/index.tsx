import { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import WcIcon from "@mui/icons-material/Wc";
import HeightIcon from "@mui/icons-material/Height";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CakeIcon from "@mui/icons-material/Cake";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import {
  DashboardContext,
  ICharacter,
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

const DetailsCharacter = () => {
  const { open, setOpen, handleClose } = useContext(DashboardContext);

  const [character, setCharacter] = useState<ICharacter>({} as ICharacter);

  const { id } = useParams();

  useEffect(() => {
    api.get(`people/${id}`).then((res) => setCharacter({ ...res.data }));
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
              {character.name}
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
              <WcIcon /> Gênero: {character.gender}
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
              Altura: {character.height}
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
              <FitnessCenterIcon />
              Peso: {character.mass}
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
              <FaceRetouchingNaturalIcon />
              Cor do cabelo: {character.hair_color}
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
              <VisibilityIcon />
              Cor do olho: {character.eye_color}
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
              <CakeIcon />
              Data de Nascimento: {character.birth_year}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailsCharacter;
