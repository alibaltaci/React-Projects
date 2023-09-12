import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";


export const sharedStyles =  css`

    color: ${({ color }) =>
        color ? theme.colors?.[color] : theme.colors.black_default
    };

`

export const StyledP = styled.p`
  ${sharedStyles}
`;

export const StyledSpan = styled.span`
  ${sharedStyles}
`;

export const StyledH1 = styled.h1`
  ${sharedStyles}
`;

export const StyledH2 = styled.h2`
  ${sharedStyles}
`;

export const StyledH3 = styled.h3`
  ${sharedStyles}
`;


// const elements = ["p", "span", "h1", "h2", "h3"];

// const StyledElements = {};

// elements.forEach(el => {
//     StyledElements[`Styled${el}`] = styled(el)`
//         ${sharedStyles}
//     `;
// });

// export { StyledElements };

