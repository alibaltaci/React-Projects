import { Box } from "../Box/Box";
import { StyledFormContentWrapper } from "./StyledForm";
import { Typography } from "../Typography/Typography"
  
export const Form = ({children, title}) => {
  return (
    <Box>
      <Typography elementType="h2" text={title} />
      <StyledFormContentWrapper>
        {children}
      </StyledFormContentWrapper>
    </Box>
  )
}
