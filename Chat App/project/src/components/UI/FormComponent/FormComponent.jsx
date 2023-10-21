import { StyledFormContentWrapper } from "./StyledForm";
import { Typography, FlexContainer } from ".."
import { Form } from "formik";
  
export const FormComponent = ({children, title, ...props }) => {
  return (
    <FlexContainer as={Form} type="column" {...props} width="90%" center  >
      <Typography elementType="h2" text={title} variant="title_2xl" color="salmon" />
      <StyledFormContentWrapper  >
        {children}  
      </StyledFormContentWrapper>
    </FlexContainer>
  )
}
