export function BookmarkIcon({ isActive }) {
    return (
          <svg viewBox="0 0 24 24" width={26.25} className="block" >
              {
                  !isActive ? (
                      <path fill="#e7e9ea"  d="M 4 4.5 C 4 3.12 5.119 2 6.5 2 h 11 C 18.881 2 20 3.12 20 4.5 v 18.44 l -8 -5.71 l -8 5.71 V 4.5 Z M 6.5 4 c -0.276 0 -0.5 0.22 -0.5 0.5 v 14.56 l 6 -4.29 l 6 4.29 V 4.5 c 0 -0.28 -0.224 -0.5 -0.5 -0.5 h -11 Z" />
                  ):
                  ( 
                      <path
                      fill="#fff" 
                      d="M 4 4.5 C 4 3.12 5.119 2 6.5 2 h 11 C 18.881 2 20 3.12 20 4.5 v 18.44 l -8 -5.71 l -8 5.71 V 4.5 Z"/> 
                  )
              }
          </svg>
    )
  }