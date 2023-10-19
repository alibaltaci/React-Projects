import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { Box } from "../Box/Box";
import { scrollEditor } from "../../utils/function";


export const StyledFlexContainerBasic = styled.div`

    display: flex;
    overflow: hidden;
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

    /* ${(props) => 
        css`
            display: ${props.display || "flex"};
        `
    } */

    display: flex;

    ${(props) =>{  
        const value = theme.borderRadius[props.radius];
        return value && 
        css`
            border-radius: ${
            props.radiusZeroOne 
            ? `0 ${value} ${value} ${value}` 
            : props.radiusZeroTwo 
            ? `${value} 0 ${value} ${value}` 
            : props.radiusZeroThree
            ? `${value} ${value} 0 ${value}` 
            : props.radiusZeroFour
            ? `${value} ${value}  ${value} 0` 
            : value
            };
        `}
    }

    ${(props) => 
        props.radiusLeft &&
        css`
            border-radius: ${theme.borderRadius[props.radiusLeft]} 0 0 ${theme.borderRadius[props.radiusLeft]};
        `
    }

    ${(props) => 
        props.radiusRight &&
        css`
            border-radius: 0 ${theme.borderRadius[props.radiusRight]} ${theme.borderRadius[props.radiusRight]} 0;
        `
    }

${(props) => 
        props.radiusOne &&
        css`
            border-radius: ${theme.borderRadius[props.radiusOne]} 0 0 0;
        `
    }

    ${(props) => 
        props.radiusTwo &&
        css`
            border-radius: 0 ${theme.borderRadius[props.radiusTwo]} 0 0;
        `
    }

    ${(props) => 
        props.radiusThree &&
        css`
            border-radius: 0 0 ${theme.borderRadius[props.radiusThree]} 0;
        `
    }

    ${(props) => 
        props.radiusFour &&
        css`
            border-radius: 0 0 0 ${theme.borderRadius[props.radiusFour]} ;
        `
    }

    ${(props) => 
        props.center && 
        css`
            align-items: center;
            justify-content: center;
        `
    }
    
    ${(props) => 
        props.align && 
        css`
            align-items: ${props.align};
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

    ${(props) =>
        props.overflow &&
        css`
            ${scrollEditor(props.overflow)}
            
        `
    }

`


export const StyledFlexContainerRow = styled(FlexBase)`
    
    flex-direction: ${({direction}) =>
        direction ? direction : "row"
    };

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


