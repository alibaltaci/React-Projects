import { ExploreIcon, HomeIcon } from ".."

export function IconReturner({icon, isActive}) {

    const iconMap={
        "home": HomeIcon,
        "explore": ExploreIcon
    }

    const SelectedIcon = iconMap[icon]
  return (
    <SelectedIcon isActive={isActive} />
  )
}
