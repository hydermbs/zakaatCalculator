import { StyledBody, ZakatResultBox, ZakatResultText, StyledTextField } from '../../styled/StyledHeader';
import CalculationBox from './CalculationBox';
import Context from './Context';
import { CALCULATION_SECTIONS,  CONSTANT } from '../../config/constant';
import { useState, useMemo } from 'react';
import { StyledCalculationBoxContainer } from '../../styled/StyledHeader';
const MidBody = () => {
    const [assetTotal, setAssetTotal] = useState<number>(0);
    const [liabilityTotal, setLiabilityTotal] = useState<number>(0);
    const [nisab, setNisab] = useState<number>(0);

    const netAssets = useMemo(() => Math.max(assetTotal - liabilityTotal, 0), [assetTotal, liabilityTotal]);
    const isEligible = useMemo(() => nisab > 0 && netAssets >= nisab, [netAssets, nisab]);
    const zakatDue = useMemo(() => (isEligible ? netAssets * 0.025 : 0), [isEligible, netAssets]);

    const handlers = [
        (total: number) => setAssetTotal(total),
        (total: number) => setLiabilityTotal(total),
    ];

    return (
        <StyledBody>
            <Context />
            <StyledCalculationBoxContainer>
                {CALCULATION_SECTIONS.map((section, index) => (
                    <CalculationBox
                        key={section.heading}
                        {...section}
                        onTotalChange={handlers[index]}
                    />
                ))}
            </StyledCalculationBoxContainer>
            <ZakatResultBox eligible={String(isEligible)}>
                <StyledTextField label={CONSTANT.nisab} value={nisab.toLocaleString()} onChange={(e) => setNisab(parseInt(e.target.value))} />
                <ZakatResultText eligible={String(isEligible)}>
                    {isEligible
                        ? CONSTANT.zakatResultPositive
                        : CONSTANT.zakatResultNegative}
                </ZakatResultText>
                <ZakatResultText eligible={String(isEligible)}>
                    {CONSTANT.zakatResultNetAssets}: {netAssets.toLocaleString()}
                </ZakatResultText>
                {isEligible && (
                    <ZakatResultText eligible={String(isEligible)}>
                        {CONSTANT.zakatResultZakatDue}: {zakatDue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </ZakatResultText>
                )}
            </ZakatResultBox>
        </StyledBody>
    );
};

export default MidBody;