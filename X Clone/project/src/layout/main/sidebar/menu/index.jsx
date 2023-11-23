import {layout} from "~/data"
import NewPost from "./newPost";
import More from "./more";
import MenuElement from "./menuElement";
import { store } from "~/store";


export default function Menu() {

    const {menu} = layout.sidebar

    const states = store.getState()

  return (
    <nav className="mt-0.5 mb-1">
        {
            menu.map( (el, index) =>(
                el.type === "button" 
                ? <More key={index}  text={el.text} icon={el.icon} />
                : el.type === "profile" 
                ? <MenuElement key={index} data={{ ...el, route: `/${states.auth?.currentAccount?.userName}` }} />
                : <MenuElement key={index} data={el} />             
            ))
        }
        <NewPost />

    </nav>
  )
}


