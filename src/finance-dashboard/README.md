# Finance Dashboard

This project is a finance dashboard application built with React and TypeScript. It allows users to upload their credit card and checking account statement PDFs, categorizes purchases, analyzes spending versus income, and provides data visualizations for spending by category.

## Features

- **File Upload**: Users can upload PDF statements for processing.
- **Transaction Categorization**: Automatically categorizes transactions into predefined categories such as eating out, groceries, and bills.
- **Spending Analysis**: Analyzes spending versus income and calculates net income.
- **Data Visualization**: Displays spending by category using charts.
- **Transaction Table**: Presents a detailed table of transactions sorted by category.

## Project Structure

```
finance-dashboard
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── FileUpload.tsx
│   │   ├── CategoryChart.tsx
│   │   ├── SpendingAnalysis.tsx
│   │   └── TransactionTable.tsx
│   ├── utils
│   │   ├── pdfParser.ts
│   │   ├── categorizer.ts
│   │   └── analysis.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd finance-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

- Upload your credit card and checking account statement PDFs using the file upload component.
- The application will parse the PDFs, categorize the transactions, and display the analysis and visualizations.
- Review your spending patterns and insights through the provided charts and tables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.