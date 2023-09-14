import styled from "styled-components";

export const StyledDropdown = styled.select`

    min-height: 3rem;
    background-color: transparent;    
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.pastel_green};

    color: ${({theme}) => theme.colors.pastel_green};

    font-weight: 600;
    font-size: 1.2rem;


    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */

    option{
        background-color: ${({theme}) => theme.colors.aubergine};
        font-size: 1.1rem;
    }


`