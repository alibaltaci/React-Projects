import styled from "styled-components";
import { StyledFlexContainerRow } from "../components/UI/FlexContainer/StyledFlexContainer";
import { theme } from "../styles/theme";

export const StyledHome = styled(StyledFlexContainerRow)`

@media (max-width: ${theme.screen.tablet}) {
            width: 90%;
            height: 90%;
            border-radius: ${theme.borderRadius.s};
            overflow: hidden;
        }

@media (max-width: ${theme.screen.mobile}) {
            width: 100%;
            height: 100%;
            /* border-radius: ${theme.borderRadius.s};
            overflow: hidden; */
        }


`