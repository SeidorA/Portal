export const ONEDRIVE_CONFIG = {
  CLIENT_ID: process.env.ONEDRIVE_CLIENT_ID || 'missing-client-id',
  TENANT_ID: process.env.ONEDRIVE_TENANT_ID || 'missing-tenant-id',
  REDIRECT_URI: process.env.ONEDRIVE_REDIRECT_URI || 'http://localhost:3000',
  GRAPH_BASE_URL: 'https://graph.microsoft.com/v1.0',
  SCOPES: ['Files.Read.All', 'Sites.Read.All']
};
