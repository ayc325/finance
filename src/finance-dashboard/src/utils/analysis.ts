import { Transaction } from '../types';

export interface AnalysisResult {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  spendingByCategory: Record<string, number>;
}

export function analyzeTransactions(transactions: Transaction[], income: number): AnalysisResult {
  const spendingByCategory: Record<string, number> = {};
  let totalExpenses = 0;

  transactions.forEach(transaction => {
    const { amount, category } = transaction;
    totalExpenses += amount;

    if (spendingByCategory[category]) {
      spendingByCategory[category] += amount;
    } else {
      spendingByCategory[category] = amount;
    }
  });

  const totalIncome = income;
  const netIncome = totalIncome - totalExpenses;

  return {
    totalIncome,
    totalExpenses,
    netIncome,
    spendingByCategory,
  };
}