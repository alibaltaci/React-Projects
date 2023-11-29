import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    currentAccount: {
        id: 1,
        fullName: 'Ali Baltacı',
        userName: '_alibaltaci',
        avatar: 'https://pbs.twimg.com/profile_images/1718310791361761280/3NuF9y6u_400x400.jpg',
        bgImage: 'https://pbs.twimg.com/profile_banners/1718304376895213569/1698535135/1500x500',
        notifications: 5
    },
    
    accounts: [
        {
            id: 1,
            fullName: 'Ali Baltacı',
            userName: '_alibaltaci',
            avatar: 'https://pbs.twimg.com/profile_images/1718310791361761280/3NuF9y6u_400x400.jpg',
            bgImage: 'https://pbs.twimg.com/profile_banners/1718304376895213569/1698535135/1500x500',
            notifications: 5
        },
        {
            id: 2,
            fullName: 'Denizm',
            userName: 'AktagDeniz',
            avatar: 'https://pbs.twimg.com/profile_images/1129772145360461824/-Xo475AB_400x400.jpg',
            bgImage: 'https://pbs.twimg.com/profile_banners/3170341777/1511557332/1500x500',
            notifications: 3
        },
    ],

    totalNotifications: 0
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        // state metodları
        _addAccount: ( state, action ) => {
            state.accounts.push( action.payload )
        },

        _removeAccount: ( state, action ) => {
            state.accounts = state.accounts.filter( account => account.id !== action.payload )

            if( state.currentAccount && action.payload === state.currentAccount.id ){
                this._setCurrentAccount( false )
            }
        },

        _setCurrentAccount: ( state, action ) => {
            state.currentAccount = action.payload
        },

        _setTotalNotifications: ( state ) => {
            state.totalNotifications = state.accounts.reduce( (total, account) => total + account.notifications, 0)
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount, _setTotalNotifications } = auth.actions
export default auth.reducer