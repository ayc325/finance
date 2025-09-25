import { PDFDocument } from 'pdf-lib';

export interface Transaction {
  date: string;
  description: string;
  amount: number;
  category?: string;
}

export const parsePDF = async (file: File): Promise<string[]> => {
  const pdfData = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfData);
  const textContent: string[] = [];

  for (let i = 0; i < pdfDoc.getPageCount(); i++) {
    const page = pdfDoc.getPage(i);
    const text = await page.getTextContent();
    const textItems = text.items.map(item => item.str);
    textContent.push(...textItems);
  }

  return textContent;
};

export const extractTransactions = (text: string[]): Transaction[] => {
  const transactions: Transaction[] = [];
  // Logic to parse text and extract transactions goes here
  // This will depend on the format of the PDF statements

  return transactions;
};