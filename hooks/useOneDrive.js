import { useState, useEffect, useCallback } from 'react';
import { OneDriveService } from '../services/onedriveService';

export const useOneDrive = (folderPath = '') => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFiles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const filesData = await OneDriveService.getFiles(folderPath);
      if (filesData) {
        setFiles(filesData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [folderPath]);

  const downloadFile = useCallback(async (fileId, fileName) => {
    try {
      const blob = await OneDriveService.getFileContent(fileId);
      if (blob) {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (err) {
      console.error('Error downloading file:', err);
      throw err;
    }
  }, []);

  const refreshFiles = useCallback(() => {
    fetchFiles();
  }, [fetchFiles]);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return {
    files,
    loading,
    error,
    downloadFile,
    refreshFiles
  };
};