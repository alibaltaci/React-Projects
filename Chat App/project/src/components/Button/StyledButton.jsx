import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

//  buttonSizes = "s" | "m" | "l";
//  borderRadiusVariants = "xs" | "s" | "m" | "l";

export const StyledButton = styled.button`

  /* width: fit-content;
  font-family: ${theme.font.secondary};
  display: flex;
  align-items: center;
  border: 1px solid #ffffff00;

  ${({ radius = "s" }) => {
    if (radius === "xs") {
      return css`
        border-radius: ${({theme}) => theme.borderRadius.xs};
      `;
    }
    if (radius === "s") {
      return css`
        border-radius: ${({theme}) => theme.borderRadius.s};
      `;
    }
    if (radius === "m") {
      return css`
        border-radius: ${({theme}) => theme.borderRadius.m};
      `;
    }
    if (radius === "l") {
      return css`
        border-radius: ${({theme}) => theme.borderRadius.l};
      `;
    }
  }}

  ${({ variant = "primary" }) => {
    if (variant === "primary") {
      return css`
        color: ${theme.colors.white_default};
        background-color: ${theme.colors.midnight_blue};
      `;
    }
    if (variant === "secondary") {
      return css`
        color: ${theme.colors.white_default};
        background-color: ${theme.colors.pale_pink};
      `;
    }

    if (variant === "tertiary") {
      return css`
        color: ${theme.colors.midnight_blue};
        background-color: ${theme.colors.white_default};
        border:1px solid ${theme.colors.midnight_blue+"A0"};
      `;
    }
    if (variant ==="salmon") {
      return css`
        color: ${theme.colors.white_default};
        background-color: ${theme.colors.salmon};
      `;
    }
  }}

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}

  ${(props) =>
    props.size &&
    props.size === "s" &&
    css`
      padding-left:20px;
      padding-right:20px;
      height:40px;
      min-width:fit-content
    `}

  ${(props) =>
    props.size &&
    props.size === "m" &&
    css`
      padding-left:40px;
      padding-right:40px;
      height:50px;
    `}

  ${(props) =>
    props.size &&
    props.size === "l" &&
    css`
      padding-left:60px;
      padding-right:60px;
      height:60px;
    `}



  ${(props) =>
    props.padingHorizontal &&
    css`
      padding-left: ${props.padingHorizontal}px;
      padding-right: ${props.padingHorizontal}px;
    `}

  ${(props) =>
    props.padingVertical &&
    css`
      padding-top: ${props.padingVertical};
      padding-bottom: ${props.padingVertical};
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
    
  ${(props) =>
    props.width &&
    css`
      width: ${props.margin}px;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}

  ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}

  ${(props) =>
    props.right &&
    css`
      right: ${props.right};
    `}

  ${(props) =>
    props.top &&
    css`
      top: ${props.top};
    `}

  ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}

  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}

  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}

  ${(props) =>
    props.boxShadow &&
    css`
      box-shadow: ${props.boxShadow};
    `}
 
  align-self:${({ alignSelf }) => alignSelf};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  } */

`;

// export const Button1 = styled.button`
 
//   border: ${({ border }) => border || "0"};
//   border-radius: ${({ radius }) => radius || "10px"};
//   width: ${({ width }) => width || "125px"};
//   height: ${({ height }) => height || "50px"};
//   font-size: ${({ size }) => size || "20px"};
//   background: ${({ background }) => background || theme.colors.navy_blue};
//   color: ${({ color }) => color || theme.colors.white_default};
//   z-index: ${({ index }) => index || "0"};
//   align-self: ${({ alignSelf }) => alignSelf};

//   &:hover {
//     opacity: 0.9;
//     cursor: pointer;
//   }
// `;

// export const ButtonLogin = styled(Button1)`
//   width: 322px;
//   height: 51px;
//   background: #3b5998;
// `;