import { StyledH1, StyledH2, StyledH3, StyledParagraph, StyledSpan } from "./StyledTypography";

export default function Typography({text, children, elementType, ...props}){

    // const SelectedComponent = 
    // elementType === "span"
    //     ? StyledSpan
    //     : elementType === "h1"
    //     ? StyledH1
    //     : elementType === "h2"
    //     ? StyledH2 
    //     : elementType === "h3"
    //     ? StyledH3
    //     : StyledParagraph

    const elementComponentMap = {
        "span": StyledSpan,
        "h1": StyledH1,
        "h2": StyledH2,
        "h3": StyledH3,
    };

    const SelectedComponent  = elementComponentMap[elementType] || StyledParagraph;

    return(
        <SelectedComponent {...props} >
            {text}
            {children}            
        </SelectedComponent>
    )
}