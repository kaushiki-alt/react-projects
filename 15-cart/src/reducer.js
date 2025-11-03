import { CLEAR_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE } from "./actions";

const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() }
    };

    if (action.type === REMOVE) {
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return { ...state, cart: newCart }
    }

    if (action.type === INCREASE_ITEM) {
        const newCart = new Map(state.cart)
        const itemID = action.payload.id
        const reqitem = newCart.get(itemID)
        const newItem = { ...reqitem, amount: reqitem.amount + 1 }
        newCart.set(itemID, newItem)

        return { ...state, cart: newCart }
    }

    if (action.type === DECREASE_ITEM) {
        const newCart = new Map(state.cart)
        const itemID = action.payload.id
        const reqItem = newCart.get(itemID)
        if (reqItem.amount === 1) {
            newCart.delete(itemID)
            return {...state, cart: newCart}
        }
        const newItem = { ...reqItem, amount: reqItem.amount - 1 }


        newCart.set(itemID, newItem)

        return {...state, cart: newCart}
    }



    throw new Error(`action not found : ${action.type}`);

}

export default reducer;