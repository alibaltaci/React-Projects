import styled, { css } from "styled-components";
import { Box } from "../Box"
import { theme } from "../../styles/theme"

export const StyledFlexContainerBasic = styled.div`

    display: flex;
    flex-wrap: ${({wrap}) => wrap};
    flex-direction: ${({direction}) => direction || "row"};
    justify-content: ${({justify}) => justify || "center"};
    align-items: ${({align}) => align || "center"};
    margin: ${({margin}) => margin || "0"};
    padding: ${({padding}) => padding || "0"};
    gap: ${({gap}) => gap || "0"};
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "100%"};
    position: ${({position}) => position || "reletive"};
    opacity: ${({opacity}) => opacity || "1"};
    border: ${({border}) => border || "none"};
    border-radius: ${({radius}) => radius || "0"};
    z-index: ${({index}) => index || "0"};

`

export const FlexBase = styled(Box)`

    display: flex;
    
    ${(props) => 
        props.align && 
        css`
            align-items: ${props.align}
        `
    }

    ${(props) => 
        props.justify &&
        css`
            justify-content: ${props.justify};
        `
    }

    ${(props) => 
        props.gap &&
        css`
            gap: ${props.gap};
        `
    }

    ${(props) => 
        props.flex && 
        css`
            flex: ${props.flex};
        `
    }

    ${(props) =>
        props.wrap &&
        css`
            flex-wrap: ${props.wrap};
        `
    }

`

export const StyledFlexContainerRow = styled(FlexBase)`
    
    flex-direction: row;

    ${(props) => 
        props.transformOptions?.[1] && 
        css`
            @media ( max-width: ${theme.screen[props.transformOptions[0]]} ){
                align-items: ${props.transformOptions[1]};
            }
        `
    }

    ${(props) => 
        props.transformOptions?.[2] &&
        css`
            @media ( max-width: ${theme.screen[props.transformOptions[0]]} ){
                justify-content: ${props.transformOptions[2]};
            }
        `
    }

    ${(props) => 
        props.transformOptions?.[3] &&
        css`
            @media (max-width: ${theme.screen[props.transformOptions[0]]}) {
                flex-direction: ${theme.transformOptions[3]};
            }
        `
    }

`
export const StyledFlexContainerColumn = styled(FlexBase)`
    
    flex-direction: column;

    ${(props) => 
        props.transformOptions?.[1] && 
        css`
            @media ( max-width: ${theme.screen[props.transformOptions[0]]} ){
                align-items: ${props.transformOptions[1]};
            }
        `
    }

    ${(props) => 
        props.transformOptions?.[2] &&
        css`
            @media ( max-width: ${theme.screen[props.transformOptions[0]]} ){
                justify-content: ${props.transformOptions[2]};
            }
        `
    }

    /* ${(props) => 
        props.transformOptions?.[3] &&
        css`
            @media (max-width: ${theme.screen[props.transformOptions[0]]}) {
                flex-direction: ${theme.transformOptions[3]};
            }
        `
    } */

`


export const InputContainer = styled(StyledFlexContainerBasic)`
  width: 322px;
  height: 51px;
  background: rgba(0, 0, 0, 0);
  border-radius: 10px;
`;

