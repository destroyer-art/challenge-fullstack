import LoginForm from "../../components/molecules/LoginForm";

interface LoginPageProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setAuthenticated }: LoginPageProps) {
  const handleLoginSuccess = () => {
    setAuthenticated(true);
  };

  return (
    <>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </>
  );
}
