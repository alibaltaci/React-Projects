import { StyledImage } from "./StyledImage"

export const Image = ({src, alt, loading, borderRadius, verticalImgPosition, ...props}) => {
    return(
        <StyledImage
            src={src}
            alt={alt}
            loading={loading}
            borderRadius={borderRadius}
            verticalImgPosition={verticalImgPosition}
            {...props}
        />
    )
}