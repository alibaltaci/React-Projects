const reducer = (state, action) => {

    switch(action.type){
        case "HOME_DATA":
            return  { ...state, common: {...state.common, hero: action.payload}}
        case "ABOUT_DATA":
            return { ...state, common: {...state.common, hero: action.payload}}
        case "SERVICES_DATA":
            return { ...state, servicesPage: action.payload }
        case "CONTACT_DATA":
            return { ...state, contactPage: action.payload.page, form: action.payload.form }
        case "PAGE404_DATA":
            return { ...state, page404: action.payload }
        case "FOOTER_DATA":
            return { ...state, footer: action.payload }
        default:
            return state
    }

}

export default reducer