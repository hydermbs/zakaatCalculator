export interface Asset {
    gold?: number;
    silver?: number;
    cash:number;
    currency?:number;
    prizeBond?:number;
    moneyDepositedInFunds?:number;
    moneyDepositedInCommittees?:number;
    stocks?:number;
    rawMaterial?:number;
    goodsInTrade?:number;
    forex?:number;
    otherAssets?:number;
}

export interface Liability {
    loans:number;
    dueInstallment:number;
    utilityBills:number;
    payablesToDealers:number;
    payableSalaries:number;
    payableDueOfCommittees:number;
    otherLiabilities:number;
}

export type SupportedType = Asset | Liability;
export type SectionField = { key: keyof Asset | keyof Liability; label: string };
export type Section = { heading: string; fields: SectionField[]; initialValues: Asset | Liability; totalLabel: string };
export type SupportedKey = keyof Asset | keyof Liability;

export interface CalculationBoxProps {
    heading: string;
    fields: SectionField[];
    initialValues: SupportedType;
    totalLabel: string;
    onTotalChange?: (total: number) => void;
}
