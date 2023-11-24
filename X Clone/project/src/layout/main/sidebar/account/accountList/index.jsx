import classNames from "classnames"
import { IconReturner } from "~/components/icons"
import { useAccount, useAccounts } from "~/store/auth/hooks"

export default function AccountList() {

  const currentAccount = useAccount()
  const accounts = useAccounts()

  return (
    <div >
      {
        accounts.map( account => (
          <button key={ account.id } className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors ",{
            "hover:bg-[#eff3f41a]" : currentAccount.id !== account.id
          })} >
            <img src={ account.avatar } alt={ account.userName } className="w-10 h-10 rounded-full"  />   
              <div className="mx-3 text-[15px] flex-1">
                  <h6 className="font-bold leading-[20px]" >{ account.fullName }</h6>
                  <p className="text-[#71767b]" >@{ account.userName }</p>
              </div> 
              { currentAccount.id === account.id && <IconReturner icon="active" />}
              { !!account.notification && (currentAccount.id !== account.id) &&
                <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] -top-1.5 -right-1 flex items-center justify-center text-[11px]">{ account.notification }</span>
              }
          </button>
        ))
      }

      <div className="h-px bg-[#2f3336] my-3" />
    </div>
  )
}
