export const addCard = (eng, pol) => ({
    type: "ADD_CARD",
    eng,
    pol
})

export const removeCard = (id) => ({
    type: "REMOVE_CARD",
    id
})