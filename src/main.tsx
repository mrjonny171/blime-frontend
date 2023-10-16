import ReactDOM from "react-dom/client";

import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Inventory from "./pages/Inventory.tsx";
import IndividualSkin from "./components/dashboard/skin/individual-skin.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    defaultTheme="dark"
    storageKey="vite-ui-theme"
  >
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/dashboard">
          <Route
            path=":component"
            element={<Dashboard />}
          />
          <Route
            path=":skinName/:condition"
            element={<IndividualSkin />}
          />
        </Route>

        <Route
          path="/inventory"
          element={<Inventory />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
