import { ADD_TO_CART, REMOVE_ITEM } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {
            id: 1,
            title: 'Winter body',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 110
        },
        {
            id: 2,
            title: 'Adidas',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80
        },
        {
            id: 3,
            title: 'Vans',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120
        },
        {
            id: 4,
            title: 'White',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260
        },
        {
            id: 5,
            title: 'Cropped-sho',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160
        },
        {
            id: 6,
            title: 'Blues',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90
        }
    ],
    addedItems: [],
    total: 0
}

export default function cartReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TO_CART :
            return onAddToCard(state, action)
        case REMOVE_ITEM :
            return onRemoveFromCard(state, action)
        default:
            return state
    }
}

function onAddToCard(state, action) {
    let addedItem = state.items.find(item => item.id === action.id)
    const isExistedItem = state.addedItems.findIndex(item => action.id === item.id) >= 0;

    if (isExistedItem) {
        addedItem.quantity += 1
        return {
            ...state,
            total: state.addedItems.reduce((acc, v) => acc + (v.price * v.quantity), 0)
        }
    } else {
        addedItem.quantity = 1;

        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: state.addedItems.reduce((acc, v) => acc + (v.price * v.quantity), 0)
        }

    }
}

function onRemoveFromCard(state, action) {
    console.info(123)
    console.info(state.addedItems.filter(item => item.id !== action.id))
    return {
        ...state,
        addedItems: state.addedItems.filter(item => item.id !== action.id),
        total: state.addedItems.reduce((acc, v) => acc + (v.price * v.quantity), 0)
    }
}
