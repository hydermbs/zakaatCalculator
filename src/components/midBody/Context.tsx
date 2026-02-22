import { Heading, SubHeading, Description } from '../../styled/StyledHeader';
import { CONSTANT } from '../../config/constant';

const Context = () => {
    return (
        <>
            <Heading>{CONSTANT.pageHeading}</Heading>
            <SubHeading>{CONSTANT.pageSubHeading}</SubHeading>
            <Description>{CONSTANT.pageDescription}</Description>
        </>
    );
};

export default Context;