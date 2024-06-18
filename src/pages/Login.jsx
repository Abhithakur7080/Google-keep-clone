import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { useFirebase } from "../firebase";
import GoogleIcon from "@mui/icons-material/Google";

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled(Box)(({ theme }) => ({
  width: "450px",
  height: "fit-content",
  boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.5)",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px 10px",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    boxShadow: "none",
    borderRadius: "0",
  },
}));
const LoginButton = styled(Button)`
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid #757575;
  &::hover{
    border: 1px solid #757575;
  }
`

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  const logo =
  "https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png";
  return (
    <Container sx={{ width: "100vw", height: "100vh" }}>
      <Wrapper>
        <img src={logo} alt="logo" style={{width: "50%"}}/>
        <Typography variant="h3" >Google Keep</Typography>
        <Typography variant="p" sx={{marginBottom: "20px"}}>Keep note, Save time</Typography>
        <LoginButton
          variant="outlined"
          startIcon={<GoogleIcon sx={{ color: "#EA4335" }} />}
          sx={{ background: "#fff", color: "#222" }}
          onClick={signInWithGoogle}
        >
          Login or Signup with Google
        </LoginButton>
      </Wrapper>
    </Container>
  );
};

export default Login;
