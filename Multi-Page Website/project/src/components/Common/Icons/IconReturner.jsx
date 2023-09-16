import ArrowUp from "./ArrowUp"
import Instagam from "./Instagam"
import LinkedIn from "./LinkedIn"
import YouTube from "./YouTube"

export default function IconReturner({type}) {

    const iconMap={
        "instagram": Instagam,
        "linkedin": LinkedIn,
        "youtube": YouTube,
        "arrowUp": ArrowUp
    }

    const SelectedIcon = iconMap[type]

  return (
    <SelectedIcon />
  )
}
