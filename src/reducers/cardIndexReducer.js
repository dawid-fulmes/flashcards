const cardIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case "NEXT_CARD":
            if (state + 1 >= action.max) {
                return 0
            }
            return state + 1
        default:
            return state
    }
}

export default cardIndexReducer;