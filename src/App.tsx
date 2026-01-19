import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ComponentPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-bg-neutral-base flex items-center justify-center p-8"
        data-pimitive-token="Mode-1"
        data-semantic-token="light-mode"
        data-component-token="mint"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/component" element={<ComponentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
