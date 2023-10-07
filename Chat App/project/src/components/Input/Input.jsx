import { FlexContainer } from "../FlexContainer/FlexContainer"
import  Typography  from "../Typography/Typography"
import { StyledTextArea } from "./StyledInput"

const InputTitle = ({isRequired, title, titleVariant}) => {

  return(
    <FlexContainer type="row" >

      <Typography 
        text={title} 
        color="idnight_blue"
        elementType={titleVariant}
        marginTrim
      />
      {
        !!isRequired && (
          <Typography 
            text="*"
            color="red_default"
            elementType={titleVariant}
            marginTrim
          />
        )
      }

    </FlexContainer>
  )

}

export const Input = ( {title, isRequired, titleVariant = "paragraph_min", ...props} ) => {

  const isTitleArray = Array.isArray(title)

  // from input tag
  if(props.type === "text-area"){
    return(
      <FlexContainer type="column" >
        {
          title && isTitleArray && (
            <>
              {
                title.map( t => (
                  <InputTitle
                      key={t}
                      isRequired={isRequired}
                      title={t}
                      titleVariant={titleVariant}
                  />
                ))
              }
            </>
          )
        }

        {
          title && !isRequired && (
            <InputTitle 
              isRequired={isRequired}
              title={title}
              titleVariant={titleVariant}
            />
          )
        }

        <StyledTextArea {...props} />
      </FlexContainer>
    )
  }

}
