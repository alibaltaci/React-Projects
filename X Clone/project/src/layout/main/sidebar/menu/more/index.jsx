import { Popover } from "@headlessui/react";
import { Disclosure } from '@headlessui/react'
import { IconReturner } from "~/components/icons";

const data = {
    disclosureData : [
        {
            title: "Creator Studio",
            contents: [
                {
                    content:"Analytics",
                    icon: "graph"
                }
            ]
        },
        {
            title: "Professional Tools",
            contents: [
                {
                    content:"Ads",
                    icon: "ad"
                }
            ]
        },
        {
            title: "Setting and Support",
            contents: [
                {
                    content:"Settings and privacy",
                    icon: "setting"
                },
                {
                    content:"Help Centery",
                    icon: "help"
                },
                {
                    content:"Display",
                    icon: "display"
                },
                {
                    content:"Keyboard shortcuts",
                    icon: "shortcut"
                }
            ]
        }
    ]
}

export default function More({text, icon}) {
  return (
    <Popover className="relative group"> 
        <Popover.Button  className="py-1 block  outline-none" >
        <div className={  "p-3 rounded-full transition-colors inline-flex items-center gap-5 text-[20px] group-hover:bg-[#eff3f41a]"}>
            <div className="w-[26.25] h-[26.25] relative">
                <IconReturner icon={icon} />
            </div>
            <div className="pr-4 text-[20px]">
                {text}
            </div>
        </div>
        </Popover.Button>
        <Popover.Panel className="absolute w-[318px] bottom-0 left-0 bg-black shadow-box rounded-xl h-[16.8rem] overflow-hidden ">
            <button className="px-4 h-14 hover:bg-[#eff3f41a] transition-colors inline-flex items-center gap-5 w-full  " >
                <div className="w-[26.25] h-[26.25] relative">
                    <IconReturner icon="money" />
                </div>
                <div className="pr-4 text-[20px] font-bold">
                    Monetization
                </div>
            </button>

            {
                data.disclosureData.map( (disclosure, index) => {
                    const {title, contents} = disclosure
                    return <Disclosure key={index} >
                        <Disclosure.Button className="h-[52px] w-full flex items-center px-4 font-bold justify-between hover:bg-[#eff3f41a] transition-colors">
                            { title }
                            <IconReturner icon="arrow" />
                        </Disclosure.Button>
                        {
                            contents.map( (el, index) => {
                                const { content, icon } = el
                                return <Disclosure.Panel key={index} className="hover:bg-[#eff3f41a] transition-colors flex">
                                    <IconReturner icon={ icon } />
                                    { content }
                                </Disclosure.Panel>
                            } )
                        }
                    </Disclosure>
                })
            }
        </Popover.Panel>
    </Popover>
  )
}





