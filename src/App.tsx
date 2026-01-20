import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomePage, ComponentPage, DashboardPage, CheckoutPage } from "./pages";
import { ToastProvider } from "./components";

function AppContent() {
  const location = useLocation();
  const isFullScreen = location.pathname === "/dashboard" || location.pathname === "/checkout";

  return (
    <div
      className={`min-h-screen bg-bg-neutral-base ${
        isFullScreen ? "flex flex-col p-0" : "flex items-center justify-center p-8"
      }`}
      data-pimitive-token="Mode-1"
      data-semantic-token="light-mode"
      data-component-token="mint"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/component" element={<ComponentPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App
