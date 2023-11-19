import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types"

export function Button({size, children}) {
  return (
    createElement( 'button', {
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center font-bold hover:bg-[#1a8cd8]" , {
             "px-4 h-9": size === "normal"
        })
    }, children)
  )
}

Button.propTypes = {
    size: PropTypes.oneOf(['normal' , 'large'])
}

Button.defaultProps = {
    size: 'normal'
}