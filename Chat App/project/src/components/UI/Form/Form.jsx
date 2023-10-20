import { StyledFormContentWrapper } from "./StyledForm";
import { Typography, FlexContainer } from ".."
  
export const Form = ({children, title, ...props }) => {
  return (
    <FlexContainer type="column" {...props} width="90%" center >
      <Typography elementType="h2" text={title} variant="title_2xl" color="salmon" />
      <StyledFormContentWrapper  >
        {children}  
      </StyledFormContentWrapper>
    </FlexContainer>
  )
}
