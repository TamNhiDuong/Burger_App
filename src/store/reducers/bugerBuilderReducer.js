import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}; 



const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,    
                ingredients: {
                    ...state.ingredients,
                    [action.ingType] : state.ingredients[action.ingType] + 1, 
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingType], 
            };
        
        case actionTypes.REMOVE_INGREDIENTS: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType] : state.ingredients[action.ingType] - 1, 
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingType],
            };
        
        case actionTypes.SET_INGREDIENTS: 
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                totalPrice: 4
            } 
        
        case actionTypes.FETCH_FAILED:
            return {
                error: true, 
            }

    };
    return state; 
   
}
export default reducer; 