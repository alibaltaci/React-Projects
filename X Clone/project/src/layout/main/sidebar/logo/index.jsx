import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="pt-0.5">
        <Link to="/" className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors" >
            <RiTwitterXLine size={30} />
        </Link>
    </div>
  )
}
