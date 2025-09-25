export interface Transaction {
  date: string;
  description: string;
  amount: number;
  category?: string;
}

export interface Category {
  name: string;
  totalSpent: number;
}

export interface AnalysisResult {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  categorizedExpenses: { [category: string]: number };
}