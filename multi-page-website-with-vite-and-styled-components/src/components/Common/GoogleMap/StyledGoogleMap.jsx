import { styled } from "styled-components";

export const StyledGoogleMap = styled.iframe`

    width:100%;
    height:60vh;
    border:0;

    @media ( max-width: ${({theme}) => theme.media.tab} ) {

        height:40vh;
    }

`