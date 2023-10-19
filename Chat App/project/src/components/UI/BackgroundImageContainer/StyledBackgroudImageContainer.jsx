import styled, { css } from "styled-components"
import { theme } from "../../../styles/theme"
import { StyledFlexContainerBasic } from "../FlexContainer/StyledFlexContainer"

export const StyledBackgroundImageContainer = styled(StyledFlexContainerBasic)`

    position: relative;
    overflow: hidden;
    /* align-items: flex-end; */
    aspect-ratio: ${({aspectRatio}) => aspectRatio};
    z-index: 0;

    @media (max-width: ${theme.screen.tablet}){
        /* padding-bottom: 20px;
        padding-left: 20px; */
    }

`

export const BackgroundOpacityWrapper = styled(StyledFlexContainerBasic)`
    position: absolute;
    align-items: flex-end;
    inset: 0;
    /* left: 0;
    top: 0;
    bottom:0;
    right: 0; */

    width: 100%;
    z-index: 2;

    ${(props) => 
        props.position && 
        css`
            position: ${props.position};
        `
    }

    background-color: ${({opacity = "0.3"}) => `rgba(0,0,0,${opacity})` };
`