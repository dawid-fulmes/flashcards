const defaultDeck = [
    { eng: "yes", pol: "tak" },
    { eng: "no", pol: "nie" }
]

const deckReducer = (state = defaultDeck, action) => {
    switch (action.type) {
        case "ADD_CARD":
            return [...state, {
                eng: action.eng,
                pol: action.pol
            }]
        case "REMOVE_CARD":
            return state.filter((card, index) => (
                action.id !== index
            ))
        default:
            return state
    }
}

export default deckReducer;