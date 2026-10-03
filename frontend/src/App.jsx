import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { DmvacProvider } from "./context/DmvacContext";

function App() {
  return (
    <DmvacProvider>
      <AppRoutes />
    </DmvacProvider>
  );
}

export default App;
