import { useState } from "react";
import { IconReturner } from "~/components/icons";

export default function Search() {

  const [query, setQuery ] = useState('')
  const [ active, setActive ] = useState(false)

  return (
    <div className="min-h-[32px] h-[53px] mb-3 mt-[5px] flex item-center  ">
        <label className="h-[43px] rounded-full bg-[#202327] w-full flex text-[#71767b] relative group border focus-within:bg-black focus-within:border-[#1d9bf0] ">
          <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0">
            <IconReturner icon="search" isActive={active} />
          </div>
            <input 
              placeholder="Search" 
              type="text" 
              className="w-full h-full pl-[56px] rounded-full bg-transparent outline-none text-white " 
              value={query}
              onChange={ e => setQuery( e.target.value ) }
              onFocus={ () => setActive(true) }
              onBlur={ () => setActive(false) }
            />
            { 
              query && active &&( 
                <button onClick={ () => setQuery('')  }
                  className="w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center text-black min-w-[22px] right-3 absolute top-1/2 -translate-y-1/2"
                >
                  <IconReturner icon="delete"  />
                </button>)
            }
        </label>
    </div>
  )
}
