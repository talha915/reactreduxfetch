const initialState = {
    state: []
}

export default function(state=initialState , actions) {
    switch(actions.type) {
        case 'FETCH':
            return {
                ...state
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: actions.payload
            }
        case 'FAILED':
            return {
                ...state
            }
        default:
            return state;            
    }
}