import { IconReturner } from "~/components/icons";

export default function Search() {
  return (
    <div className="min-h-[32px] h-[53px] mb-3 mt-[5px] flex item-center  ">
        <label className="h-[43px] rounded-full bg-[#202327] w-full flex text-[#71767b] relative group focus-within:bg-black focus-within:border-[#1d9bf0] border-transparent">
          <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0">
            <IconReturner icon="search" />
          </div>
            <input placeholder="Search" type="text" className="w-full h-full pl-[56px] rounded-full bg-transparent outline-none" />
        </label>
    </div>
  )
}
