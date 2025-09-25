import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Trigger the parsing process here
      console.log('File uploaded:', file.name);
      // Call the PDF parsing function from utils/pdfParser.ts
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