import React, { useState } from "react";
import { Form, LoginFormContainer, Title } from "./styles";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { Flex } from "../../../styles/global";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // lógica para lidar com o login, pode chamar ação do redux
    console.log(`Login with username: ${username} and password: ${password}`);
  };
  return (
    <LoginFormContainer>
      <Flex>
        <Title>Login</Title>
        <Form>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            
          <Button onClick={handleLogin}>Login</Button>
        </Form>
      </Flex>
    </LoginFormContainer>
  );
}
