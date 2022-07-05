const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    dataTable:[]
}

//reducer
const rootReducer = (state = initialState, action)=>{
    // console.log(action);
    if(action.type === 'SEARCH'){
        return {
            ...state,
            dataTable: state.dataTable
        }
    }
    return state;
}
//store
const store = createStore(rootReducer);
// console.log(store.getState());

//distpatching action
store.dispatch({type: "SEARCH"})
console.log(store.getState());
//subcription