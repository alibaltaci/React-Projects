import { styled } from "styled-components";

const StyledHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        height: auto;
        max-width: 20%;
        min-width: 3rem;
    }

`

export default StyledHeader;