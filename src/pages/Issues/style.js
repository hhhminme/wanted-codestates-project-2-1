import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 50px;
  padding-bottom: 200px;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const HomeButton = styled(Link)`
  background: #2da44e;
  padding: 10px;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 10px;
`;

export const PageTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
`;

export const Message = styled.div`
  width: 100%;
  font-size: 30px;
  text-align: start;
`;
