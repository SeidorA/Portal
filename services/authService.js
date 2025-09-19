import { PublicClientApplication } from '@azure/msal-browser';
import { ONEDRIVE_CONFIG } from '../config/onedrive';



const msalConfig = {
  auth: {
    clientId: ONEDRIVE_CONFIG.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${ONEDRIVE_CONFIG.TENANT_ID}`,
    redirectUri: ONEDRIVE_CONFIG.REDIRECT_URI,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

let msalInitialized = false;
export async function ensureMsalInitialized() {
  if (!msalInitialized) {
    await msalInstance.initialize();
    msalInitialized = true;
  }
}

export const loginRequest = {
  scopes: ONEDRIVE_CONFIG.SCOPES,
};

export class AuthService {
  static async getAccessToken() {
    await ensureMsalInitialized(); // <-- Asegura inicialización
    try {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length === 0) {
        // Redirect para login
        await msalInstance.loginRedirect(loginRequest);
        return null;
      }

      const request = {
        ...loginRequest,
        account: accounts[0]
      };

      const response = await msalInstance.acquireTokenSilent(request);
      return response.accessToken;
    } catch (error) {
      console.error('Error getting access token:', error);
      // Fallback a login redirect
      await msalInstance.loginRedirect(loginRequest);
      return null;
    }
  }

  static async logout() {
    await ensureMsalInitialized(); // <-- Asegura inicialización
    await msalInstance.logout();
  }
}
