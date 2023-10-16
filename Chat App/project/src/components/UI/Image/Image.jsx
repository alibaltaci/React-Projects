import { StyledImage } from "./StyledImage"

export const Image = ({src, alt, loading, borderRadius, verticalImgPosition}) => {
    return(
        <StyledImage
            src={src}
            alt={alt}
            loading={loading}
            borderRadius={borderRadius}
            verticalImgPosition={verticalImgPosition}
        />
    )
}