const reducer = (state, action) => {

    switch(action.type){
        case "HOME_DATA":
            console.log({ ...state, common: action.payload})
            return  { ...state, common: action.payload}
        case "ABOUT_DATA":
            return { ...state, common: action.payload}
        case "SERVICES_DATA":
            return { ...state, servicesPage: action.payload }
        default:
            return state
    }

}

export default reducer