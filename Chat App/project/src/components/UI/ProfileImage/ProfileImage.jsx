import { StyledProfileImage } from "./StyledProfileImage";

export default function ProfileImage({src, alt, ...props}) {
  return (
    <StyledProfileImage src={src} alt={alt} {...props} />
  )
}
