import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { StyledPageTitle } from '../styled/StyledHeader';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <StyledPageTitle>Zakat Calculator</StyledPageTitle>
            </Toolbar>
        </AppBar>
    );
};

export default Header;