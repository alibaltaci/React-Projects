import { StyledH1, StyledH2, StyledH3, StyledP, StyledSpan } from "./StyledTypography";

export default function Typography({elementType, text, children, ...props}) {

  const elementMap = {
    "span": StyledSpan,
    "h1": StyledH1,
    "h2": StyledH2,
    "h3" : StyledH3
  }

  const SelectedElement = elementMap[elementType] || StyledP

  return (
    <SelectedElement {...props}>
      {text}
      {children}
    </SelectedElement >
  )
}