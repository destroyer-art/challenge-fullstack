import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #333;
  letter-spacing: 2px;
  line-height: 1.2;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
