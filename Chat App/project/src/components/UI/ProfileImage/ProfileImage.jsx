import { StyledProfileImage } from "./StyledProfileImage";

export const ProfileImage = ({src, alt, ...props}) => {
  return (
    <StyledProfileImage src={src || "./images/balloon-profile.svg"} alt={alt} {...props} />
  )
}
