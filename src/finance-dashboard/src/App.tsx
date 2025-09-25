import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SpendingAnalysis from './components/SpendingAnalysis';
import TransactionTable from './components/TransactionTable';
import CategoryChart from './components/CategoryChart';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleFileUpload = (uploadedTransactions: Transaction[]) => {
    setTransactions(uploadedTransactions);
    // Additional logic for categorization and analysis can be added here
  };

  return (
    <div className="App">
      <h1>Finance Dashboard</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <SpendingAnalysis analysisResult={analysisResult} />
      <TransactionTable transactions={transactions} />
      <CategoryChart categories={categories} />
    </div>
  );
}

export default App;