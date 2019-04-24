const appModeReducer = (state = "LEARN_MODE", action) => {
    switch (action.type) {
        case "LEARN_MODE":
            return "LEARN_MODE"
        case "EDIT_MODE":
            return "EDIT_MODE"
        default:
            return state
    }
}

export default appModeReducer;