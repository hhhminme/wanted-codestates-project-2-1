import styled from "styled-components";

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: #00000047;
`;

export const ModalCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 25%;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const ModalCloseBtn = styled.button`
  padding: 0.5rem 1.5rem;
  color: black;
  font-weight: bold;
`;

export const ModalContentWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  font-weight: 600;
`;

export const ModalContent = styled.h2`
  font-weight: 600;
`;
