import styled from '@emotion/styled';
import { Box, TextField, Typography
 } from '@mui/material';

export const StyledPageTitle = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    flexOrigin: 'center',
    '@media (max-width: 600px)': {
        fontSize: '1.4rem',
    },
});
export const Heading = styled(Typography)({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1976d2',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginBottom: '0px',
    '@media (max-width: 600px)': {
        fontSize: '1.2rem',
    },
});
export const SubHeading = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: '20px',
    '@media (max-width: 600px)': {
        fontSize: '1rem',
        margin: '10px',
    },
});

export const Description = styled(Typography)({
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#1976d2',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
});

export const StyledItemHeading = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    alignItems: 'left',
    justifyContent: 'left',
    display: 'flex',
});

export const StyledAssetItem = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    minWidth: 0,
    '@media (max-width: 600px)': {
        flexBasis: '100%',
        margin: '6px',
    },
});

export const StyledBody = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    flexOrigin: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    margin: '20px',
    width: '100%',
    height: '100%',
    maxWidth: '70%',
    maxHeight: '100%',
    minWidth: '70%',
    minHeight: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    justifySelf: 'center',
    alignContent: 'center',
    justifyItems: 'center',
    '@media (max-width: 600px)': {
        maxWidth: '95%',
        minWidth: '95%',
        margin: '10px',
        padding: '12px',
    },
});

export const ZakatResultBox = styled(Box)<{ eligible: string }>(({ eligible }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '20px 0',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: eligible === 'true' ? '#e8f5e9' : '#fce4ec',
    border: `2px solid ${eligible === 'true' ? '#4caf50' : '#e91e63'}`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

export const ZakatResultText = styled(Typography)<{ eligible: string }>(({ eligible }) => ({
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: eligible === 'true' ? '#2e7d32' : '#c62828',
    textAlign: 'center',
    marginBottom: '8px',
}));

export const StyledTextField = styled(TextField)({
    width:'80%',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    alignSelf: 'center',
    '@media (max-width: 600px)': {
        width: '100%',
        margin: '6px 0',
        padding: '6px',
    },
});

export const StyledCalculationBoxContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    width: '100%',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },
});
