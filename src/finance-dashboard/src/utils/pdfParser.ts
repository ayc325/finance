import { Transaction } from '../types';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import { WorkerMessageHandler } from 'pdfjs-dist/build/pdf.worker.min.mjs';

// Set the worker source using the ES module URL
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = new URL(
  WorkerMessageHandler,
  import.meta.url
).toString();

export const parsePDF = async (file: File): Promise<string[]> => {
  const pdfData = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
  const textContent: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const text = await page.getTextContent();
    const pageText = text.items.map((item: any) => item.str).join(' ');
    textContent.push(pageText);
  }

  console.log('Parsed PDF text:', textContent);

  return textContent;
};

export const extractTransactions = (text: string[]): Transaction[] => {
  const transactions: Transaction[] = [];
  // This regex matches: date, description, amount (with optional negative sign)
  const transactionRegex = /(\d{2}\/\d{2})\s+([A-Z0-9* .\-]+?)\s+(-?\d{1,3}(?:,\d{3})*(?:\.\d{2}))/g;

  text.forEach(pageText => {
    let match;
    while ((match = transactionRegex.exec(pageText)) !== null) {
      const [, date, description, amountStr] = match;
      const amount = parseFloat(amountStr.replace(/,/g, ''));
      transactions.push({
        date,
        description: description.trim(),
        amount,
      });
    }
  });

  console.log('Extracted transactions:', transactions);

  return transactions;
};