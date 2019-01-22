const weather = (state = {},action) =>{
    switch (action.type) {
        case 'SUCCESS':
            return {state:"success",weatherInfo:action.payload}

        case 'ERROR':
            return {state:"error"}
            
        default:
            return state
    }
}

export default weather;