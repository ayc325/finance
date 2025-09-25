import { Transaction } from '../types';

export interface CategorizedTransaction {
  transaction: Transaction;
  category: string;
}

const categories = {
  eatingOut: ['restaurant', 'cafe', 'diner', 'fast food'],
  groceries: ['grocery', 'supermarket', 'food store'],
  bills: ['electricity', 'water', 'internet', 'phone'],
  entertainment: ['movie', 'concert', 'event'],
  transportation: ['gas', 'taxi', 'uber', 'bus'],
};

export function categorizeTransaction(transaction: Transaction): CategorizedTransaction {
  const lowerDescription = transaction.description.toLowerCase();
  let category = 'other';

  for (const [key, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowerDescription.includes(keyword))) {
      category = key;
      break;
    }
  }

  return {
    transaction,
    category,
  };
}

export function categorizeTransactions(transactions: Transaction[]): CategorizedTransaction[] {
  return transactions.map(categorizeTransaction);
}