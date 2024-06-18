import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <Button
      component="button"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<GoogleIcon sx={{ color: "#EA4335" }} />}
      sx={{ background: "#fff", color: "#222" }}
    >
      Login or Signup with Google
    </Button>
  );
};

export default Login;
