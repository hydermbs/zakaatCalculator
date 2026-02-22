import type { Asset, Liability, Section } from "../types/types";


export const CONSTANT = {
    pageHeading: 'HOW TO CALCULATE ZAKAH?',
    pageSubHeading: 'What is the zakat that was given to me?',
    pageDescription: 'First, determine the date on which zakat became farz upon you according to the lunar calendar. As per market value on the above date, determine [and put in the below calculator] the value of all assets which you own on the date set above, and on which Zakah will be calculated. Necessary assets on whose value Zakah is to be calculated are given below.This is an obligatory duty on a lunar date, and the date on which it is determined is an obligatory duty on a lunar/Islamic date. The date on which the property is not available is available. Zakat on furniture that matches the brand name, such as specifying a drawer at the bottom of the same way. Zakat funds are required for a comprehensive fuel collector.',
    zakatResultPositive: 'You are eligible for Zakat',
    zakatResultNegative: 'You are not eligible for Zakat',
    zakatResultNetAssets: 'Net Assets',
    zakatResultZakatDue: 'Zakat Due (2.5%)',
    nisab: 'Nisab',
};

export const ASSET_FIELDS: { key: keyof Asset; label: string }[] = [
    { key: 'gold', label: 'Gold' },
    { key: 'silver', label: 'Silver' },
    { key: 'cash', label: 'Cash' },
    { key: 'currency', label: 'Currency' },
    { key: 'prizeBond', label: 'Prize Bond' },
    { key: 'moneyDepositedInFunds', label: 'Money Deposited in Funds' },
    { key: 'moneyDepositedInCommittees', label: 'Money Deposited in Committees' },
    { key: 'stocks', label: 'Stocks' },
    { key: 'rawMaterial', label: 'Raw Material' },
    { key: 'goodsInTrade', label: 'Goods in Trade' },
    { key: 'forex', label: 'Forex' },
    { key: 'otherAssets', label: 'Other Assets' },
];

export const INITIAL_ASSETS: Asset = {
    gold: 0, silver: 0, cash: 0, currency: 0, prizeBond: 0,
    moneyDepositedInFunds: 0, moneyDepositedInCommittees: 0,
    stocks: 0, rawMaterial: 0, goodsInTrade: 0, forex: 0, otherAssets: 0,
};

export const LIABILITY_FIELDS: { key: keyof Liability; label: string }[] = [
    { key: 'loans', label: 'Loans' },
    { key: 'dueInstallment', label: 'Due Installment' },
    { key: 'utilityBills', label: 'Utility Bills' },
    { key: 'payablesToDealers', label: 'Payables to Dealers' },
    { key: 'payableSalaries', label: 'Payable Salaries' },
    { key: 'payableDueOfCommittees', label: 'Payable Due of Committees' },
    { key: 'otherLiabilities', label: 'Other Liabilities' },
];

export const INITIAL_LIABILITIES: Liability = {
    loans: 0, dueInstallment: 0, utilityBills: 0,
    payablesToDealers: 0, payableSalaries: 0,
    payableDueOfCommittees: 0, otherLiabilities: 0,
};





export const CALCULATION_SECTIONS: Section[] = [
    { heading: 'Calculate Assets:', fields: ASSET_FIELDS, initialValues: INITIAL_ASSETS, totalLabel: 'Total Assets' },
    { heading: 'Calculate Liabilities:', fields: LIABILITY_FIELDS, initialValues: INITIAL_LIABILITIES, totalLabel: 'Total Liabilities' },
];
