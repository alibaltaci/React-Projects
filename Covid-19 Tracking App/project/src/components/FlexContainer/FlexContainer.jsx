import { StyledFlexContainerBasic, StyledFlexContainerColumn, StyledFlexContainerRow } from "./StyledFlexContainer";

export const FlexContainer = ({type, children, ...props}) => {

  const map = {
    "row": StyledFlexContainerRow,
    "column": StyledFlexContainerColumn
  }

  const SelectedContainer = map[type] || StyledFlexContainerBasic
  
  return(
    <SelectedContainer {...props} >
      {children}
    </SelectedContainer >
  )

}