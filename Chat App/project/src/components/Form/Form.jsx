import { Box } from "../Box/Box";
import { StyledFormContentWrapper } from "./StyledForm";
import { Typography } from "../Typography/Typography"
  
export const Form = ({children, title, ...props }) => {
  return (
    <Box {...props}>
      <Typography elementType="h2" text={title} variant="title_2xl" color="salmon" />
      <StyledFormContentWrapper  >
        {children}
      </StyledFormContentWrapper>
    </Box>
  )
}
