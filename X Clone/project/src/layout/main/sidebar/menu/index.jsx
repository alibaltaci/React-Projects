import {layout} from "~/data"
// import { store } from "~/store";
import NewPost from "./newPost";
import More from "./more";
import MenuElement from "./menuElement";
import { useAccount } from "~/store/auth/hooks";

export default function Menu() {

    const {menu} = layout.sidebar

    // const states = store.getState()

    const account = useAccount()

  return (
    <nav className="mt-0.5 mb-1" key={account} >
        {
            menu.map( (el, index) =>(
                el.type === "more" 
                ? <More key={index}  text={el.text} icon={el.icon} />
                : el.type === "profile" 
                // ? <MenuElement key={index} data={{ ...el, route: `/${states.auth?.currentAccount?.userName}` }} />
                ? <MenuElement key={index} data={{ ...el, route: () => `/${account.userName}` }} />
                : <MenuElement key={index} data={el} />             
            ))
        }
        <NewPost />

    </nav>
  )
}


