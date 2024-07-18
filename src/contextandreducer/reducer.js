const InitailState = {
    sidebar_class : "sidebar-inactive",
    restoId : "",
    username : ""
}

function reducers (state,action) {
    switch (action.type) {
        case "sidebar_is_open":
            return {
                ...state,
                sidebar_class : action.payload
            }
        case "resto_id" : {
            return {
                ...state,
                restoId : action.payload
            }
        }
        case "user_info": {
            return {
                ...state,
                usesrname : action.payload
            }
        }
            
        default:
            break;
    }
    
}

export {reducers, InitailState}