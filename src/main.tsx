import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "./providers/LanguageProvider";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <LanguageProvider>
        <NavBar />
        <Home />
        <Footer />
      </LanguageProvider>
    </GlobalStyle>
  </React.StrictMode>
);
