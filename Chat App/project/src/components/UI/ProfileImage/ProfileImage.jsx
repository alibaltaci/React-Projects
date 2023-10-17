import { StyledProfileImage } from "./StyledProfileImage";

export const ProfileImage = ({src, alt, ...props}) => {
  return (
    <StyledProfileImage src={src} alt={alt} {...props} />
  )
}
