import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { IconReturner } from "~/components/icons";

export default function MenuElement({ data } ) {

    const { text, icon, route, notification} = data

    console.log("-->", data)

  return (
    <NavLink to={route} className=" mb-[-4px] block group" >
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
  )
}
