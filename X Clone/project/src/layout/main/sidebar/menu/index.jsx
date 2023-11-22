import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { IconReturner } from "~/components/icons";
import {components} from "../../../../data"
import NewPost from "./newPost";
import More from "./more";

export default function Menu() {

    const {icons} = components

  return (
    <nav className="mt-0.5 mb-1">
        {
            icons.map( (el, index) =>{ 
                const { text, icon, route, notification, type} = el
                return type !== "button" ?
                    (
                        <NavLink key={index} to={route} className=" mb-[-4px] block group" >
                            {({isActive}) => (
                                <div 
                                    className={ 
                                        classNames(
                                            "p-3 rounded-full transition-colors inline-flex items-center gap-5 text-[20px] group-hover:bg-[#eff3f41a]",
                                            { "font-bold": isActive }
                                        )
                                    }
                                >
                                    <div className="w-[26.25] h-[26.25] relative">
                                        { !!notification && !isActive &&
                                            <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{ notification }</span>
                                        }
                                        <IconReturner icon={icon} isActive={isActive} />
                                    </div>
                                    <div className="pr-4">
                                        {text}
                                    </div>
                                </div>
                            )}
                        </NavLink>
                    ): 
                    (
                        <More key={index}  text={text} icon={icon} />
                    )
            })
        }

        <NewPost />

    </nav>
  )
}


