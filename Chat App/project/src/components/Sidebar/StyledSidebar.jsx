import styled from "styled-components";
import { StyledFlexContainerColumn } from "../UI/FlexContainer/StyledFlexContainer";
import { theme } from "../../styles/theme";

export const StyledSidebar = styled(StyledFlexContainerColumn)`

    @media (max-width: ${theme.screen.tablet}) {
            /* display: none; */
            width: 100%;
            border-radius: ${theme.borderRadius.s};
            overflow: hidden;
    }
`