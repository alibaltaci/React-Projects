import { Field } from "formik"
import { FlexContainer } from "../FlexContainer/FlexContainer"
import BallonProfile from "../Icons/BallonProfile"
import { Typography } from "../Typography/Typography"
import { StyledInput,  StyledLabel,  StyledTextArea } from "./StyledInput"

const InputTitle = ({isRequired, title, titleVariant}) => {

  return(
    <FlexContainer type="row" >

      <Typography 
        text={title} 
        color="salmon"
        elementType="h3"
        variant={titleVariant}
        marginTrim
      />
      {
        !!isRequired && (
          <Typography 
            text="*"
            color="red_default"
            elementType="h3"
            variant="title_xs"
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
  // text-area
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
        
        <Field 
          as={StyledTextArea}
          {...props}
        />
        {/* <StyledTextArea {...props} /> */}

      </FlexContainer>
    )
  }

  // checkbox
  if(props.type ===  "checkbox"){
    return(
      <FlexContainer type="row" >
         <Field 
          as={StyledInput}
          {...props}
        />
        {/* <StyledInput {...props} /> */}
        {
          title && !isTitleArray && (
            <InputTitle 
              isRequired={isRequired}
              title={title}
              titleVariant={titleVariant}
            />
          )
        }
        {
          title && isTitleArray && (
            <FlexContainer type="column" >
              {title.map( t => (
                <InputTitle 
                  key={t}
                  isRequired={isRequired}
                  title={t}
                  titleVariant={titleVariant}
                />
              ))}
            </FlexContainer>
          )
        }
      </FlexContainer>
    )
  }


  // file
  if(props.type === "file"){
    return(
      <FlexContainer type="row" >
        <Field 
          id="file"
          as={StyledInput}
          {...props}
        />
        {/* <StyledInput {...props} id="file" /> */}
        <StyledLabel htmlFor="file" >
          <BallonProfile />
          {
            title && (
            <InputTitle
              title={title}
              isRequired={isRequired}
              titleVariant={titleVariant}
            />
            )
          }

        </StyledLabel>
        
      </FlexContainer>
    )
  }

  // input
  return(
    <FlexContainer type="column" 
      width={props.width} 
      height={props.height} 
    >
      {
        title && !isTitleArray && (
          <InputTitle
            title={title}
            isRequired={isRequired}
            titleVariant={titleVariant}
          />
        )
      }
      {
        title && isTitleArray && (
          <FlexContainer type="column">
            {
              title.map( t => (
                <InputTitle 
                  key={t}
                  title={title}
                  isRequired={isRequired}
                  titleVariant={titleVariant}
                />
              ))
            }
          </FlexContainer>
        )
      }

        <Field 
          as={StyledInput}
          {...props}
        />
      {
        !!props.errorMessage && (
          <Typography 
            text={props.errorMessage}
            elementType="paragraph_min"
            color="red_default"
            marginTrim
          />
        )
      }

    </FlexContainer>
  )


}
