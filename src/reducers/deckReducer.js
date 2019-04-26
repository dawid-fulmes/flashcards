const defaultDeck = [
    { eng: "Thanks", pol: "Dzięki" },
    { eng: "I’m sorry", pol: "Przepraszam" },
    { eng: "Hello", pol: "Cześć" },
    { eng: "Can I have...", pol: "Czy mogę dostać..." },
    { eng: "How much does it cost?", pol: "Ile to kosztuje?" },
    { eng: "Yes", pol: "Tak" },
    { eng: "No", pol: "Nie" },
    { eng: "My name is...", pol: "Nazywam się..." },
    { eng: "What’s your name?", pol: "Jak masz na imię?" },
    { eng: "How are you?", pol: "Jak się masz?" },
    { eng: "Great!", pol: "Świetnie!" },
    { eng: "Again, please", pol: "Jeszcze raz, proszę" },
    { eng: "More slowly, please", pol: "Wolniej proszę" },
    { eng: "Sorry, I Don’t understand", pol: "Przepraszam, nie rozumiem" },
    { eng: "Where is (the)...?", pol: "Gdzie jest...?" },
    { eng: "Goodbye", pol: "Do widzenia" },
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