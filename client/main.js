// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "./styles.css";

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello, World!</h1>
    <h1>This is test 2</h1>
  </div>
`;