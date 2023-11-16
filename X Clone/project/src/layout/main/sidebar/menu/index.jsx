import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { IconReturner } from "~/components/icons";
import {components} from "../../../../data"

export default function Menu() {

    const {icons} = components

  return (
    <nav className="mt-0.5 mb-1">
        {
            icons.map( (el, index) =>{ 
                const { text, icon, route} = el
                return(
                    <NavLink key={index} to={route} className="py-1 block group" >
                        {({isActive}) => (
                            <div 
                                className={ 
                                    classNames(
                                        "p-3 rounded-full transition-colors inline-flex items-center gap-5 text-[20px] group-hover:bg-[#eff3f41a]",
                                        { "font-bold": isActive }
                                    )
                                }
                            >
                                <IconReturner icon={icon} isActive={isActive} />
                                <div className="pr-4 text-[20px]">
                                    {text}
                                </div>
                            </div>
                        )}
                    </NavLink>
            )})
        }
    </nav>
  )
}


