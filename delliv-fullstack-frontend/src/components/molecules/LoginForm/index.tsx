import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Div, Title } from "./styles";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // @ts-ignore
      dispatch(login(email, password, onLoginSuccess));

      history.push("/");
    } catch (error: any) {
      let errorMessage = "Erro desconhecido";
      let statusCode = 500;

      if (error.response) {
        errorMessage = error.response.data.message;
        statusCode = error.response.status;
      }

      toast.error(`Erro ${statusCode}: ${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  return (
    <Div>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          data-testid="button"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <ToastContainer />
    </Div>
  );
}
