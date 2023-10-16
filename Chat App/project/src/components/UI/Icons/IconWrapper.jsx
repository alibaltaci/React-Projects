import { FlexContainer } from "../FlexContainer/FlexContainer";

export default function IconWrapper({children, ...props}) {
  return (
    <FlexContainer height="5rem" width="5rem" {...props}  >
        {children}
    </FlexContainer>
  )
}
