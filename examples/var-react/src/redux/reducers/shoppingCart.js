const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const SET_ITEM_QUANTITY = 'SET_ITEM_QUANTITY'

export function addItem(product, quantity) {
  return {
    type: ADD_ITEM,
    payload: {
      id: product.id,
      item: {
        product,
        quantity
      }
    }
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: { id }
  }
}

export function setItemQuantity(id, quantity) {
  return {
    type: SET_ITEM_QUANTITY,
    payload: { id, quantity }
  }
}

const initialState = {
  itemIds: [],
  itemMap: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { id, item } = action.payload
      const existingItem = state.itemMap[id]
      if (existingItem) {
        const newState = {
          ...state,
          itemMap: {
            ...state.itemMap,
            [id]: {
              ...existingItem,
              quantity: existingItem.quantity + 1
            }
          }
        }
        return newState
      }
      const newState = {
        ...state,
        itemIds: [...state.itemIds, id],
        itemMap: {
          ...state.itemMap,
          [id]: item
        }
      }
      return newState
    }
    case REMOVE_ITEM: {
      const { id } = action.payload
      const newState = {
        ...state,
        itemIds: state.itemIds.filter(x => x !== id),
        itemMap: {
          ...state.itemMap
        }
      }
      delete newState.itemMap[id]
      return newState
    }
    case SET_ITEM_QUANTITY: {
      let { id, quantity } = action.payload
      quantity = Number(quantity)
      if (!Number.isInteger(quantity) || quantity <= 0) {
        quantity = 1
      } else if (quantity > 30) {
        quantity = 30
      }
      const newState = {
        ...state,
        itemMap: {
          ...state.itemMap,
          [id]: {
            ...state.itemMap[id],
            quantity
          }
        }
      }
      return newState
    }
    default:
      return state
  }
}
