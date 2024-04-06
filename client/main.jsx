// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./styles.css";

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)