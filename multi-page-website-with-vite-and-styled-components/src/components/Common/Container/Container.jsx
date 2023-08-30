import { StyledContainer } from "./StyledContainer";

export default function Container({children, ...props}) {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}
