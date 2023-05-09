import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import { Auth0Provider } from "@auth0/auth0-react";

const Index = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
