import classNames from "classnames"
import { IconReturner } from "~/components/icons"
import { useAccount, useAccounts } from "~/store/auth/hooks"
import {layout} from "~/data"
import { setCurrentAccount } from "~/store/auth/actions"

export default function AccountList( {close} ) {

  const currentAccount = useAccount()
  const accounts = useAccounts().filter( el => el.id !== currentAccount.id )

  const allAccountsData = [currentAccount, ...accounts]

  const data = layout.sidebar.account

  return (
    <div >
      {
        allAccountsData.map( account => {
          const { id, userName, fullName, notifications, avatar} = account
          const currentAccountId = currentAccount.id
          return(
            <button 
              type="button"
              key={ id }
              disabled={ currentAccountId === id}
              onClick={() => {
                setCurrentAccount(account)
                close()
              }}
              className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors ",{
              "hover:bg-[#eff3f41a]" : currentAccountId !== id
            })} >
              <img src={ avatar } alt={ userName } className="w-10 h-10 rounded-full"  />   
                <div className="mx-3 text-[15px] flex-1">
                    <h6 className="font-bold leading-[20px]" >{ fullName }</h6>
                    <p className="text-[#71767b]" >@{ userName }</p>
                </div> 
                { currentAccountId === id && <IconReturner icon="active" />}
                { !!notifications && (currentAccountId !== id) &&
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] -top-1.5 -right-1 flex items-center justify-center text-[11px]">{ notifications }</span>
                }
            </button>
        )})
      }

      <div className="h-px bg-[#2f3336] my-3" />

      {
        data.map( (el) => {
          const {content, variant} = el
          return(
            variant 
            ?(
              <button key={content} className="py-2.5 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold">
                {content}{currentAccount.userName}
              </button>
          )
          :(
            <button key={content} className="py-2.5 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold">
              {content}
            </button>
            )
          )
        })
      }  
    </div>
  )
}
