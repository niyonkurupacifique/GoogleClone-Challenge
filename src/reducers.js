import { SET_SEARCH_RESULT_DATA } from "./action";
const searchResultDateInitialState={
    searchResult:[]
}

export const searchResultDateReducers=(state=searchResultDateInitialState,action)=>{
    switch(action.type){
        case SET_SEARCH_RESULT_DATA:
            return{
                ...state,
                searchResult:action.payload
            }
            default:
            return state

    }
}