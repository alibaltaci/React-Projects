import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledImage = styled.img`

    z-index: 0;

    ${(props) => 
        props.verticalImgPosition === "bottom" &&
        css`
            width: 100%;
            position: "relative";
            top: "50%";
            transform: "translateY(-50%)";
        `
    }

    ${(props) => 
        props.borderRadius &&
        css`
            border-radius: ${theme.borderRadius[props.borderRadius]};
        `
    }
`