import React from "react";
import { DeleteOutlined as Delete } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

const Bin = styled(Delete)`
  font-size: 120px;
  color: #c5c5c5;
`;
const Text = styled(Typography)`
  color: #a5a5a5;
  font-size: 22px;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const EmptyTrash = () => {
  return (
    <Container>
      <Bin />
      <Text>Notes you haven't deleted yet.</Text>
    </Container>
  );
};

export default EmptyTrash;
