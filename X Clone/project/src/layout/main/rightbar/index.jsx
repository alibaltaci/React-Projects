import Premium from "~/components/premium";
import Search from "./search";
import Topics from "~/components/topics";

export default function Rightbar() {
  return (
    <aside className="w-[350px] mr-5" >
      <Search />
      <Premium />
      <Topics />
    </aside>
  )
}
