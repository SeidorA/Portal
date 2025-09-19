import { AuthService } from './authService'; // <-- Agrega esta línea
import { ONEDRIVE_CONFIG } from '../config/onedrive';

export class OneDriveService {
  static async getFiles(folderPath = '') {
    try {
      const token = await AuthService.getAccessToken();
      if (!token) return null;

      const endpoint = folderPath 
        ? `${ONEDRIVE_CONFIG.GRAPH_BASE_URL}/me/drive/root:/${folderPath}:/children`
        : `${ONEDRIVE_CONFIG.GRAPH_BASE_URL}/me/drive/root/children`;

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return this.transformFiles(data.value);
    } catch (error) {
      console.error('Error fetching files:', error);
      throw error;
    }
  }

  static async getFileContent(fileId) {
    try {
      const token = await AuthService.getAccessToken();
      if (!token) return null;

      const response = await fetch(
        `${ONEDRIVE_CONFIG.GRAPH_BASE_URL}/me/drive/items/${fileId}/content`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.blob();
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  }

  static async getDownloadUrl(fileId) {
    try {
      const token = await AuthService.getAccessToken();
      if (!token) return null;

      const response = await fetch(
        `${ONEDRIVE_CONFIG.GRAPH_BASE_URL}/me/drive/items/${fileId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data['@microsoft.graph.downloadUrl'];
    } catch (error) {
      console.error('Error getting download URL:', error);
      throw error;
    }
  }

  static transformFiles(files) {
    return files.map(file => ({
      id: file.id,
      name: file.name,
      type: this.getFileType(file.name),
      extension: this.getFileExtension(file.name),
      size: file.size ? this.formatFileSize(file.size) : 'Desconocido',
      downloadUrl: file['@microsoft.graph.downloadUrl'],
      lastModified: file.lastModifiedDateTime,
      isFolder: !!file.folder,
      webUrl: file.webUrl,
      mimeType: file.file?.mimeType || 'application/octet-stream'
    }));
  }

  static getFileType(fileName) {
    const extension = this.getFileExtension(fileName).toLowerCase();
    const typeMap = {
      '.doc': 'document',
      '.docx': 'document',
      '.pdf': 'pdf',
      '.txt': 'document',
      '.md': 'document',
      '.jpg': 'image',
      '.jpeg': 'image',
      '.png': 'image',
      '.gif': 'image',
      '.mp4': 'video',
      '.avi': 'video',
      '.mov': 'video',
      '.mp3': 'audio',
      '.wav': 'audio',
      '.zip': 'archive',
      '.rar': 'archive',
      '.js': 'code',
      '.css': 'code',
      '.html': 'code',
      '.jsx': 'code',
      '.tsx': 'code',
      '.ts': 'code'
    };
    return typeMap[extension] || 'file';
  }

  static getFileExtension(fileName) {
    return fileName.substring(fileName.lastIndexOf('.'));
  }

  static formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
