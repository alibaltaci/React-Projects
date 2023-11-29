import { Popover, Transition } from "@headlessui/react";
import { IconReturner } from "~/components/icons";
import { useAccount, useNotifications } from "~/store/auth/hooks";
import AccountList from "./accountList";
import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _setTotalNotifications } from "~/store/auth";

export default function Account() {

    const account = useAccount()
    const totalNotifications =  useNotifications() 

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch( _setTotalNotifications() )
    },[dispatch])

    console.log(totalNotifications)

  return (
    <div className="mt-auto">
        <Popover className="relative">
            {({open}) => (
            <>
            <Popover.Button 
                className={classNames("my-3 p-3 rounded-full hover:bg-[#eff3f41a] outline-none w-full flex text-left items-center justify-between transition-colors ", {
                "hover:bg-black cursor-default": open})}
                // disabled={open}
            >
                <div  className="flex" >
                    <img src={ account.avatar } alt={ account.userName } className="w-10 h-10 rounded-full"  />   
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]" >{ account.fullName }</h6>
                        <p className="text-[#71767b]" >@{ account.userName }</p>
                    </div> 
                </div>
                <div className="relative">
                    { !!totalNotifications && <span className="absolute w-[7px]  h-[7px] rounded-full bg-[#1d9bf0] -top-[3px] -right-[3px]" /> } 
                    <IconReturner icon="points" />
                </div>
            </Popover.Button> 
            <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="absolute bottom-full py-3 w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-xl overflow-hidden"
            >
                <Popover.Panel >
                    <AccountList />
                </Popover.Panel>
            </Transition>
            </>
            )}
        </Popover>
    </div>
  )
}
