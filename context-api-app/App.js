import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AuthProvider } from "./src/contexts/AuthContext";


export default function App() {
  return (
    <TemaProvider>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </TemaProvider>
  );
}