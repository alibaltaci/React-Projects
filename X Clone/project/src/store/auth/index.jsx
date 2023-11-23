import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        fullName: 'Ali Baltacı',
        userName: '_alibaltaci',
        avatar: 'https://pbs.twimg.com/profile_images/1718310791361761280/3NuF9y6u_400x400.jpg',
        bgImage: 'https://pbs.twimg.com/profile_banners/1718304376895213569/1698535135/1500x500'
    },
    accounts: []
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
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer