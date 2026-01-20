import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ComponentPage } from "./pages";
import { ToastProvider } from "./components";

function App() {
  return (
    <ToastProvider>
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
    </ToastProvider>
  );
}

export default App
