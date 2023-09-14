import styled from "styled-components";

export const StyledDropdown = styled.select`

    min-height: 3rem;
    background-color: transparent;    
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.pastel_green};
    cursor: pointer;

    color: ${({theme}) => theme.colors.pastel_green};

    font-weight: 600;
    font-size: 1.2rem;
    
    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */

    &:hover{
        background-color:${({theme}) => theme.colors.deep_fuchsia } ;
        border-radius: 10px;
        border: none;
    }

    option{
        background-color: ${({theme}) => theme.colors.aubergine};
        font-size: 1.1rem;
    }

`