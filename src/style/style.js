import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  diplay: block;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 80px;
  border-radius: 10px;
  background-color: rgb(57, 57, 57);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
`;

export const Result = styled.label`
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
  padding: 0.5rem;
  width: 312px;
  font-size: ${props => (props.fontsize.length > 9 ? "2rem" : "2.5rem")};
`;

export const Divider = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Buttons = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  justify-item: center;
  align-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 350px;
  margin: 0 auto;
`;

export const Calc = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 4rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: rgb(57, 57, 57);
  border: none;
  border-radius: 50%;
  text-align: center;
  margin: 0 auto;

  &.main {
    color: rgb(128, 128, 128);

    :hover {
      color: rgb(255, 255, 255);
      background-color: rgb(128, 128, 128);
      border-radius: 50%;
    }
  }
  &.process {
    color: rgb(252, 111, 113);

    :hover {
      color: rgb(255, 255, 255);
      border-radius: 50%;
      background-color: rgb(252, 111, 113);
    }
  }
`;
