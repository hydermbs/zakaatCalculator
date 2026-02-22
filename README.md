# Zakat Calculator

A web app that helps Muslims calculate their Zakat obligation — determining both eligibility and the amount due based on assets, liabilities, and a configurable Nisab threshold.

## Features

- **12 asset categories** — Gold, Silver, Cash, Currency, Prize Bonds, Money in Funds, Money in Committees, Stocks, Raw Material, Goods in Trade, Forex, and Other Assets
- **7 liability categories** — Loans, Due Installments, Utility Bills, Payables to Dealers, Payable Salaries, Payable Due of Committees, and Other Liabilities
- **Configurable Nisab** — Enter your own Nisab threshold (minimum wealth that triggers Zakat)
- **Real-time calculation** — Net Assets and Zakat Due update instantly as you type
- **Eligibility result** — Color-coded display showing whether you owe Zakat and the exact amount

## How It Calculates

| Field | Formula |
|---|---|
| Net Assets | `max(Total Assets − Total Liabilities, 0)` |
| Zakat Due | `Net Assets × 2.5%` (only when eligible) |
| Eligibility | `Net Assets ≥ Nisab` and `Nisab > 0` |

The default Nisab reference value is **PKR 50,000** (approximate silver Nisab), but you can enter any value in the Nisab field.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Build Tool | Vite 7 |
| UI Library | MUI (Material UI) v7 |
| Styling | Emotion (`@emotion/react`, `@emotion/styled`) |
| Linting | ESLint 9 with `typescript-eslint` |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <repo-url>
cd zakat-calculator
npm install
```

### Running the App

```bash
# Start the development server (with HMR)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run the linter
npm run lint
```

The dev server starts at `http://localhost:5173` by default.

## Project Structure

```
src/
├── App.tsx                        # Root component
├── main.tsx                       # React entry point
├── index.css                      # Global styles
├── components/
│   ├── header.tsx                 # App bar with title
│   └── midBody/
│       ├── MidBody.tsx            # Main body — state management & result display
│       ├── CalculationBox.tsx     # Reusable input form for assets or liabilities
│       └── Context.tsx            # Intro heading and description
├── config/
│   └── constant.ts                # All field definitions, UI strings, and initial values
├── styled/
│   └── StyledHeader.tsx           # Emotion-styled MUI components
└── types/
    └── types.ts                   # TypeScript interfaces and types
```

## Configuration

All field labels, UI strings, and initial values are centralized in `src/config/constant.ts`, making it straightforward to add new asset/liability categories or update copy without touching component logic.
