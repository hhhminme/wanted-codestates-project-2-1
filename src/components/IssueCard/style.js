import styled from "styled-components";

export const Card = styled.a`
  display: block;
  list-style: none;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 250px;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  transition: all 300ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const RepoName = styled.h3`
  font-size: 1rem;
  margin-top: 10px;
  color: #2da44e;
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const Date = styled.span`
  font-size: 0.8rem;
  color: gray;
`;

export const Container = styled.div``;
