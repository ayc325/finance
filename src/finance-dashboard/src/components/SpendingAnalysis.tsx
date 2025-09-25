import React from 'react';
import { AnalysisResult } from '../types';

interface SpendingAnalysisProps {
  analysisResult: AnalysisResult;
}

const SpendingAnalysis: React.FC<SpendingAnalysisProps> = ({ analysisResult }) => {
  const { totalIncome, totalExpenses, netIncome, categorizedExpenses } = analysisResult;

  return (
    <div className="spending-analysis">
      <h2>Spending Analysis</h2>
      <div className="summary">
        <p>Total Income: ${totalIncome.toFixed(2)}</p>
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Net Income: ${netIncome.toFixed(2)}</p>
      </div>
      <h3>Expenses by Category</h3>
      <ul>
        {Object.entries(categorizedExpenses).map(([category, amount]) => (
          <li key={category}>
            {category}: ${amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingAnalysis;