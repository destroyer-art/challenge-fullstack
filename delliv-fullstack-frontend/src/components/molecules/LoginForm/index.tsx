import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, LoginFormContainer, Title } from "./styles";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { Flex } from "../../../styles/global";
import { login } from "../../../redux/actions/authActions";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      // @ts-ignore
      const response = login(email, password);
      console.log(response);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        
        history.push('/orders-list');
      }, 2000);
      
      onLoginSuccess();

      setErrorMessage(null);
    } catch (error) {
      console.log('error', error);
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <LoginFormContainer>
      <Flex>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
        </Form>
      </Flex>
      {showSuccessMessage && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          Login successful! Redirecting to orders...
        </div>
      )}
      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
    </LoginFormContainer>
  );
}
