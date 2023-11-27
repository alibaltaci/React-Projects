import classNames from "classnames"
import { IconReturner } from "~/components/icons"
import { useAccount, useAccounts } from "~/store/auth/hooks"

export default function AccountList() {

  const currentAccountId = useAccount().id
  const accounts = useAccounts()

  return (
    <div >
      {
        accounts.map( account => {
          const { id, userName, fullName, notification, avatar} = account
          return(
            <button key={ id } className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors ",{
              "hover:bg-[#eff3f41a]" : currentAccountId !== id
            })} >
              <img src={ avatar } alt={ userName } className="w-10 h-10 rounded-full"  />   
                <div className="mx-3 text-[15px] flex-1">
                    <h6 className="font-bold leading-[20px]" >{ fullName }</h6>
                    <p className="text-[#71767b]" >@{ userName }</p>
                </div> 
                { currentAccountId === id && <IconReturner icon="active" />}
                { !!notification && (currentAccountId !== id) &&
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] -top-1.5 -right-1 flex items-center justify-center text-[11px]">{ notification }</span>
                }
            </button>
        )})
      }

      <div className="h-px bg-[#2f3336] my-3" />

      <>
        burdan devam 
      </>
    </div>
  )
}
