import { Popover } from "@headlessui/react";
import { IconReturner } from "~/components/icons";
import { useAccount } from "~/store/auth/hooks";

export default function Account() {

    const account = useAccount()

  return (
    <div className="mt-auto">
        <Popover>
            <Popover.Button 
                className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] outline-none w-full flex text-left items-center justify-between"
            >
                <div  className="flex" >
                    <img src={ account.avatar } alt={ account.userName } className="w-10 h-10 rounded-full"  />   
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]" >{ account.fullName }</h6>
                        <p className="text-[#71767b]" >@{ account.userName }</p>
                    </div> 
                </div>
                <IconReturner icon="points" />
            </Popover.Button>
            <Popover.Panel>
                panel
            </Popover.Panel>
        </Popover>
    </div>
  )
}
