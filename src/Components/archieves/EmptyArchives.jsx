import React from "react";
import { ArchiveOutlined as Archive } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

const Arch = styled(Archive)`
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

const EmptyArchives = () => {
  return (
    <Container>
      <Arch />
      <Text>Notes you haven't archived.</Text>
    </Container>
  );
};

export default EmptyArchives;
