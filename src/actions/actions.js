export const switchLearnMode = () => ({
    type: "LEARN_MODE"
})
export const switchEditMode = () => ({
    type: "EDIT_MODE"
})

export const addCard = (eng, pol) => ({
    type: "ADD_CARD",
    eng,
    pol
})

export const removeCard = (id) => ({
    type: "REMOVE_CARD",
    id
})

export const nextCard = (max) => ({
    type: "NEXT_CARD",
    max
})