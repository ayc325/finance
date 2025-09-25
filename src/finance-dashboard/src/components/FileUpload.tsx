import React, { useState } from 'react';
import { parsePDF, extractTransactions } from '../utils/pdfParser';
import { Transaction } from '../types';

interface FileUploadProps {
  onFileUpload: (transactions: Transaction[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      console.log('File uploaded:', file.name);
      const textContent = await parsePDF(file);
      const transactions = extractTransactions(textContent);
      onFileUpload(transactions);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;