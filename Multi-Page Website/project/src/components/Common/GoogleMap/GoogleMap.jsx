import { StyledGoogleMap } from "./StyledGoogleMap";

export default function GoogleMap({location}) {
  return (
    <StyledGoogleMap 
        src={location}
        
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />

  )
}
