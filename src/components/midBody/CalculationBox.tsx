import { StyledAssetItem, SubHeading, StyledTextField } from '../../styled/StyledHeader';
import { useState } from 'react';
import type { CalculationBoxProps, SupportedType, SupportedKey } from '../../types/types';



const CalculationBox = ({ heading, fields, initialValues, totalLabel, onTotalChange }: CalculationBoxProps) => {
    const [values, setValues] = useState<SupportedType>(initialValues);
    const [total, setTotal] = useState<number>(0);

    const handleChange = (field: SupportedKey, value: number) => {
        setValues((prev) => {
            const updated = { ...prev, [field]: value } as SupportedType;
            const newTotal = Object.values(updated).reduce((acc, curr) => acc + curr, 0);
            setTotal(newTotal);
            onTotalChange?.(newTotal);
            return updated;
        });
    };

    return (
        <StyledAssetItem>
            <SubHeading>{heading}</SubHeading>
            {fields.map(({ key, label }) => (
                <StyledTextField
                    key={String(key)}
                    label={label}
                    value={(values[key as keyof SupportedType] as number) ?? 0}
                    onChange={(e) => handleChange(key, parseInt(e.target.value) || 0)}
                />
            ))}
            <SubHeading>{totalLabel}: {total}</SubHeading>
        </StyledAssetItem>
    );
};

export default CalculationBox;
