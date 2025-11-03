import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";
import { CLEAR_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE } from "./actions";
import cartItems from "./data";
import { getTotal } from "./utils";


const AppContext = createContext();

const initialState = {
    isLoading : false,
    cart: new Map(cartItems.map((item) =>[item.id, item]))
}

export const AppProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialState);
const {totalAmount, totalCost } = getTotal(state.cart)
const clearCart = () => {
  dispatch({type: CLEAR_CART});
}

const removeItem = (id) => {
  dispatch({type: REMOVE, payload: {id}});
}

const increaseItem = (id) => {
  dispatch({type: INCREASE_ITEM , payload: {id}});
}
const decreaseItem = (id) => {
  dispatch({type: DECREASE_ITEM , payload: {id}});
}



return(
    <AppContext.Provider value={{...state, clearCart, removeItem, increaseItem, decreaseItem, totalAmount, totalCost}}>
        {children}
    </AppContext.Provider>
)
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}
