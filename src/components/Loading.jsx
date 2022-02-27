import React from "react";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

function Loading() {
  return (
    <SpinnerContainer>
      <TailSpin color="#40c055" height={50} width={50} />
    </SpinnerContainer>
  );
}

export default Loading;
