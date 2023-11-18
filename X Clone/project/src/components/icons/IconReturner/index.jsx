import { BookmarkIcon, CommunitiesIcon, ExploreIcon, HomeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, XIcon } from ".."

export function IconReturner({icon, isActive}) {

    const iconMap={
        "home": HomeIcon,
        "explore": ExploreIcon,
        "notification": NotificationIcon,
        "message": MessageIcon,
        "list": ListIcon,
        "bookmark": BookmarkIcon,
        "communities": CommunitiesIcon,
        "x": XIcon,
        "profile": ProfileIcon,
        "more": MoreIcon
    }

    const SelectedIcon = iconMap[icon]
  return (
    <SelectedIcon isActive={isActive} />
  )
}
