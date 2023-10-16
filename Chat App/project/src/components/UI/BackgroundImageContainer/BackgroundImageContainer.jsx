import { Image } from "../Image/Image"
import { BackgroundOpacityWrapper, ContentContainer, StyledBackgroundImageContainer } from "./StyledBackgroudImageContainer"

export const BackgroundImageContainer = ({children, bgOpacity, aspectRatio ="1.65", imageUrl, loading, alt, verticalImgPosition, ...props}) => {
    
    return(
        <StyledBackgroundImageContainer aspectRatio={aspectRatio} {...props} >
            <BackgroundOpacityWrapper opacity={bgOpacity} borderRadius={props.borderRadius} >
                <Image 
                    src={imageUrl}
                    loading={loading}
                    alt={alt}
                    verticalImgPosition={verticalImgPosition}
                />
            </BackgroundOpacityWrapper>
            <ContentContainer>
                {children}
            </ContentContainer>
        </StyledBackgroundImageContainer>

    )
}