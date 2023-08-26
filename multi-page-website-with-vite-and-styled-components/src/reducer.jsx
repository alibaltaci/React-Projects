const reducer = (state, action) => {

    switch(action.type){
        case "HOME_DATA":
            console.log({ ...state, pageData: action.payload})
            return  { ...state, pageData: action.payload}
        case "ABOUT_DATA":
            return { ...state, pageData: action.payload}
        default:
            return state
    }

}

export default reducer