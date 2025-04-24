import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundImage: "url('https://th.bing.com/th/id/R.c8d68433803b0d5bbb8d190e08596153?rik=nYBMFJX%2b2GBFCQ&pid=ImgRaw&r=0')", // Fondo Dragon Ball
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: "20px",
      }}
    >
      <img
        src="https://vignette.wikia.nocookie.net/dragonballfanon/images/6/6f/Goku_herido_btl.jpg/revision/latest?cb=20180305223116&path-prefix=es" // Imagen de error Dragon Ball
        alt="Error 404"
        style={{
          maxWidth: "300px",
          marginBottom: "20px",
        }}
      />
      <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "bold", textShadow: "2px 2px 5px #000" }}>
        ¡Error 404!
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "20px", textShadow: "1px 1px 3px #000" }}>
        Parece que te perdiste en el universo de Dragon Ball.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: "#ff9800",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e68900",
          },
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
};

export default ErrorPage;