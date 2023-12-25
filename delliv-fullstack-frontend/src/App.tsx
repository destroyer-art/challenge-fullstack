import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
}
