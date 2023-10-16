import { StyledImage } from "./StyledImage"

export const Image = ({src, alt, loading, borderRadius}) => {
    return(
        <StyledImage
            src={src}
            alt={alt}
            loading={loading}
            borderRadius={borderRadius}
        />
    )
}