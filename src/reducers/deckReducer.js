const defaultDeck = [
    { eng: "yes", pol: "tak" },
    { eng: "no", pol: "nie" }
]

const deckReducer = (state = defaultDeck, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default deckReducer;