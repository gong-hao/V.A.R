const LOAD_LIST = 'LOAD_LIST'
const CHANGE_PAGE = 'CHANGE_PAGE'
const CHANGE_LIMIT = 'CHANGE_LIMIT'

export const loadList = data => ({
  type: LOAD_LIST,
  payload: data
})

export const changePage = page => ({
  type: CHANGE_PAGE,
  payload: { page }
})

export const changeLimit = limit => ({
  type: CHANGE_LIMIT,
  payload: { limit }
})

const initialState = {
  items: [],
  count: 0,
  last: 0,
  page: 1,
  limit: 10
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST: {
      const {
        items,
        count,
        last,
        page,
        limit
      } = action.payload
      const newState = {
        ...state,
        items,
        count,
        last,
        page,
        limit
      }
      return newState
    }
    case CHANGE_PAGE: {
      const { page } = action.payload
      const newState = {
        ...state,
        page
      }
      return newState
    }
    case CHANGE_LIMIT: {
      const { limit } = action.payload
      const newState = {
        ...state,
        limit
      }
      return newState
    }
    default:
      return state
  }
}
