import { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";

import { Error, Form, Input, Label, Register } from "./style";
import { FormContext } from "../../../contexts/FormProvider";
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../validators";
import { IErrors } from "../../../contexts/FormProvider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#111",
  border: "3px solid #fff",
  borderRadius: ".4rem",
  boxShadow: 24,
  p: 3,
};

const FormRegister = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { submitRegister } = useContext(FormContext);

  useEffect(() => {
    handleOpen();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  let error: IErrors = errors;

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <CloseIcon
            onClick={() => handleClose()}
            sx={{
              color: "#fff",
              position: "absolute",
              right: "2rem",
              cursor: "pointer",
            }}
          />
          <Typography
            fontSize="1.25rem"
            color="#fff"
            fontFamily="jedi"
            textAlign="center"
          >
            Cadastro
          </Typography>
          <Form onSubmit={handleSubmit(submitRegister)}>
            <Box display={"flex"} gap={1} flexDirection="column">
              <Label htmlFor="name">Nome</Label>
              <Box
                display="flex"
                width="100%"
                padding="0"
                bgcolor="#fff"
                borderRadius="15px"
              >
                <Input
                  type="text"
                  id="name"
                  placeholder="Digite o seu nome"
                  {...register("name")}
                />
                {error?.name && (
                  <Error>
                    <ErrorOutlineIcon />
                    <span>{error.name.message}</span>
                  </Error>
                )}
              </Box>

              <Label htmlFor="email">Email</Label>
              <Box
                display="flex"
                width="100%"
                padding="0"
                bgcolor="#fff"
                borderRadius="15px"
              >
                <Input
                  type="email"
                  id="email"
                  placeholder="Digite o seu e-mail"
                  {...register("email")}
                />
                {error?.email && (
                  <Error>
                    <ErrorOutlineIcon />
                    <span>{error.email.message}</span>
                  </Error>
                )}
              </Box>

              <Label htmlFor="password">Senha</Label>

              <Box
                display="flex"
                width="100%"
                padding="0"
                bgcolor="#fff"
                borderRadius="15px"
              >
                <Input
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  {...register("password")}
                />
                {error?.password && (
                  <Error>
                    <ErrorOutlineIcon />
                    <span>{error.password.message}</span>
                  </Error>
                )}
              </Box>

              <Label htmlFor="password">Confirmar senha</Label>

              <Box
                display="flex"
                width="100%"
                padding="0"
                bgcolor="#fff"
                borderRadius="15px"
              >
                <Input
                  type="password"
                  id="password"
                  placeholder="Confirmar a senha"
                  {...register("confirmPassword")}
                />
                {error?.confirmPassword && (
                  <Error>
                    <ErrorOutlineIcon />
                    <span>{error.confirmPassword.message}</span>
                  </Error>
                )}
              </Box>
            </Box>
            <Button
              type="submit"
              color="inherit"
              aria-required
              style={{ fontFamily: "jedi" }}
            >
              Cadastrar
            </Button>
          </Form>
          <Typography
            fontSize=".6rem"
            color="#fff"
            fontFamily="jedi"
            textAlign="center"
            marginBottom="1.25rem"
          >
            Faça login para aproveitar todos os nossos recursos
          </Typography>
          <Register to={"/login"}>Faça Login</Register>
        </Box>
      </Modal>
    </div>
  );
};

export default FormRegister;
