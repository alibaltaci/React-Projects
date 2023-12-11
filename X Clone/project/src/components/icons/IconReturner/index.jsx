import { ActiveIcon, AdIcon, ArrowIcon, BookmarkIcon, CommunitiesIcon, DisplayIcon, ExploreIcon, GraphIcon, HelpIcon, HomeIcon, ListIcon, MessageIcon, MoneyIcon, MoreIcon, NotificationIcon, PointsIcon, ProfileIcon, SearchIcon, SettingIcon, ShortcutIcon, XIcon } from ".."

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
        "more": MoreIcon,
        "money": MoneyIcon,
        "arrow": ArrowIcon,
        "graph": GraphIcon,
        "ad": AdIcon,
        "setting": SettingIcon,
        "help": HelpIcon,
        "display": DisplayIcon,
        "shortcut": ShortcutIcon,
        "points": PointsIcon,
        "active": ActiveIcon,
        "search": SearchIcon
    }

    const SelectedIcon = iconMap[icon]
  return (
    <SelectedIcon isActive={isActive} />
  )
}
